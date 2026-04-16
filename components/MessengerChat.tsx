import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const MessengerChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const startChat = () => {
    window.open('https://m.me/496295773560645', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`mb-4 w-[320px] md:w-[380px] bg-white dark:bg-charcoal rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-charcoal/5 dark:border-white/10 overflow-hidden transition-all duration-500 origin-bottom-right transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gold p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display font-bold">
              ZEN
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">Zen Visual Media</h3>
              <p className="text-[10px] opacity-80 uppercase tracking-tighter">Thường trả lời ngay</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 bg-softWhite dark:bg-dark/50">
          <div className="bg-white dark:bg-charcoal p-4 rounded-2xl rounded-tl-none shadow-sm border border-charcoal/5 dark:border-white/5 inline-block max-w-[90%]">
            <p className="text-sm text-charcoal dark:text-gray-300 leading-relaxed">
              Chào bạn! Zen có thể giúp gì cho bạn trong việc hiện thực hóa các ý tưởng hình ảnh không?
            </p>
          </div>
          <div className="mt-4 text-[10px] text-charcoal/40 dark:text-white/40 font-bold uppercase tracking-widest text-center">
            Bắt đầu cuộc trò chuyện ngay
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white dark:bg-charcoal">
          <button 
            onClick={startChat}
            className="w-full bg-gold hover:bg-gold/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-gold/20"
          >
            <Send size={18} />
            <span>Chat qua Messenger</span>
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold rounded-full shadow-[0_8px_30px_rgb(240,90,40,0.3)] hover:shadow-[0_8px_30px_rgb(240,90,40,0.5)] transform hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20 group-hover:opacity-40"></div>
        <div className="relative z-10 text-white">
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </div>
      </button>
    </div>
  );
};

export default MessengerChat;
