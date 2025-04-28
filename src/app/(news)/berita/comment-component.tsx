// "use client";

// import { useState } from "react";

// interface Comment {
//   id: number;
//   name: string;
//   message: string;
//   date: string;
// }

// export default function CommentSection() {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim() || !message.trim()) return;

//     const newComment: Comment = {
//       id: Date.now(),
//       name,
//       message,
//       date: new Date().toLocaleString(),
//     };

//     setComments([newComment, ...comments]);
//     setName("");
//     setMessage("");
//   };

//   return (
//     <div className="mt-8 w-full max-w-2xl mx-auto px-4">
//       <h3 className="text-2xl font-bold mb-6">Komentar</h3>

//       {/* Form Komentar */}
//       <form onSubmit={handleSubmit} className="space-y-4 mb-8">
//         <div>
//           <input
//             type="text"
//             placeholder="Nama Anda"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder="Tulis komentar Anda..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
//         >
//           Kirim Komentar
//         </button>
//       </form>

//       {/* List Komentar */}
//       <div className="space-y-6">
//         {comments.length === 0 ? (
//           <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>
//         ) : (
//           comments.map((comment) => (
//             <div key={comment.id} className="p-4 border rounded-lg shadow-sm">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="font-semibold">{comment.name}</h4>
//                 <span className="text-sm text-gray-400">{comment.date}</span>
//               </div>
//               <p className="text-gray-700">{comment.message}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Dummy comments
  useEffect(() => {
    const dummyComments: Comment[] = [
      {
        id: 1,
        name: "Budi",
        message: "Artikel yang sangat menarik! Terima kasih informasinya.",
        date: "2025-04-28 10:15",
      },
      {
        id: 2,
        name: "Siti",
        message: "Saya jadi lebih paham setelah membaca artikel ini.",
        date: "2025-04-28 11:05",
      },
      {
        id: 3,
        name: "Andi",
        message: "Ada referensi tambahan nggak soal topik ini?",
        date: "2025-04-28 12:30",
      },
    ];
    setComments(dummyComments);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <div className="mt-8 w-full max-w-2xl mx-auto px-4">
      <h3 className="text-2xl font-bold mb-6">Komentar</h3>

      {/* Form Komentar */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <textarea
            placeholder="Tulis komentar Anda..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Kirim Komentar
        </button>
      </form>

      {/* List Komentar */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">Belum ada komentar. Jadilah yang pertama!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-sm text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
