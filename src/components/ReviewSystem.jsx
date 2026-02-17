import { useState, useEffect } from 'react';
import { auth, provider, db } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where } from 'firebase/firestore';

export default function ReviewSystem({ productId }) {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((u) => setUser(u));
    
    try {
      const q = query(
        collection(db, "reviews"), 
        where("productId", "==", productId),
        orderBy("createdAt", "desc")
      );

      const unsubscribeSnap = onSnapshot(q, (snapshot) => {
        setReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }, (error) => {
        console.error("Erro no Firestore:", error);
      });

      return () => {
        unsubscribeAuth();
        unsubscribeSnap();
      };
    } catch (err) {
      console.error("Erro ao configurar consulta:", err);
    }
  }, [productId]);

  const handleReview = async () => {
    if (!comment.trim()) {
        alert("Por favor, digite um comentário antes de enviar.");
        return;
    }

    let currentUser = user;

    if (!currentUser) {
      try {
        const result = await signInWithPopup(auth, provider);
        currentUser = result.user;
        setUser(currentUser);
      } catch (error) {
        if (error.code === 'auth/unauthorized-domain') {
            alert("Domínio não autorizado. Verifique as configurações do Firebase.");
        }
        console.error("Erro no login:", error);
        return; 
      }
    }

    try {
        await addDoc(collection(db, "reviews"), {
          productId,
          userName: currentUser.displayName,
          userPhoto: currentUser.photoURL,
          rating,
          comment,
          createdAt: serverTimestamp()
        });
        setComment("");
        alert("Feedback enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar:", error);
        alert("Ocorreu um erro ao enviar seu feedback.");
    }
  };

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Feedbacks Clientes</h3>

      {/* Área de Input de Feedback */}
      <div className="flex gap-4 mb-10">
        <img 
          src={user?.photoURL || "https://www.gravatar.com/avatar/?d=mp"} 
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
          alt="Avatar"
        />
        <div className="flex-1">
          <textarea 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Qual produto você comprou? E o que você achou deste produto?"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-black bg-white"
            rows="3"
          />
          
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">Sua nota:</span>
              <select 
                value={rating} 
                onChange={(e) => setRating(Number(e.target.value))}
                className="bg-white border border-gray-300 rounded-lg px-2 h-[40px] text-sm outline-none cursor-pointer text-black min-w-[70px]"
              >
                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
              </select>
            </div>

            <button 
              onClick={handleReview}
              className="bg-blue-600 text-white px-6 h-[40px] rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-md text-sm flex items-center justify-center whitespace-nowrap"
            >
              Enviar Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Feedbacks Estilo Shopee */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">Nenhuma avaliação ainda. Seja o primeiro a comentar!</p>
          </div>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <img 
                  src={rev.userPhoto || "https://www.gravatar.com/avatar/?d=mp"} 
                  className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm" 
                  alt={rev.userName} 
                />
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-bold text-gray-900 text-sm">{rev.userName}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-medium mt-1 sm:mt-0">
                      {rev.createdAt?.toDate ? rev.createdAt.toDate().toLocaleDateString('pt-BR') : 'Recentemente'}
                    </span>
                  </div>

                  {/* Estrelas Amarelas */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < rev.rating ? 'text-yellow-400' : 'text-gray-200'}`}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Comentário com fundo leve */}
                  <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-50">
                    {rev.comment}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}