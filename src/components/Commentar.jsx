import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Commentar() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" data-aos="fade-up">
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl font-bold text-white">Comments</h2>
      </div>
      <div className="flex flex-col items-center justify-center py-16 rounded-2xl border border-white/10 bg-white/5">
        <MessageCircle className="w-10 h-10 text-gray-700 mb-3" />
        <p className="text-gray-500 text-sm">Comments are disabled.</p>
      </div>
    </section>
  );
}
