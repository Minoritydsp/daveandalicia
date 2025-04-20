"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const chats = [
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Haii ciaakk! Masih inget gak pertama kali kita ketemu? 😆",
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: "Iyahh dongg! Waktu itu kamu sok cool padahal gugup banget ya? 🤭",
  },
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Aduuuh ketahuan dehh… tapi akhirnya aku berani juga ngajak kamu ngobrol! 😎",
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: "Dan sekarang… liat kita! Udah sejauh ini bareng-bareng 🥰",
  },
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Aku paling suka waktu kita jalan ke tempat makan itu, yang kamu makan sampe senyum-senyum sendiri 🤣",
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: "Hahaha kamu juga tuh, mukanya kayak 😳 tiap aku ngelirik",
  },
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Pokoknya, hari-hari sama kamu tuh kayak nonton film romantis + komedi + kartun lucu 😚",
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: "Iyaaa! Dan ending-nya harus happy terus ya, gak boleh sedih-sedih 🫶",
  },
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Deal! Kita buat cerita cinta paling lucu dan manis seduniaaaa 💗",
  },
];

const personalInfo = [
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: `Lahir di Bekasi, 13 Agustus 2003\nMakanan & Minuman Favorit: matcha, sate, katsu mentai\nHobby: Gaming, Hit the GYM, Ciaaa`,
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: `Lahir di Bekasi, 6 Agustus 2005\nMakanan & Minuman Favorit: matcha, siomay, bebek\nHobby: Gaming, Gambar, Angyy ke kak Dave 😡💓`,
  },
  {
    sender: "Dave",
    avatar: "/galeri/DaveLove.png",
    text: "Kita sama-sama Leo loh guyssss 🦁🔥",
  },
  {
    sender: "Ciaakk",
    avatar: "/galeri/ciaakkLove.png",
    text: "Sama-sama aneh lagi hihihihihi 🤪💞",
  },
];

export default function AboutUsPage() {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat buka halaman
  }, []);

  const handleKenalanClick = () => {
    setShowPersonalInfo(true);
  };

  return (
    <div className="about-us-container">
      <div className="phone-frame">
        <div className="chat-header jelly">Tentang Kita 💬</div>
        <div className="chat-body">
          {!showPersonalInfo ? (
            chats.map((chat, index) => (
              <div
                key={index}
                className={`chat-bubble ${chat.sender === "Dave" ? "left" : "right"} jelly`}
              >
                <Image
                  src={chat.avatar}
                  alt={chat.sender}
                  width={40}
                  height={40}
                  className="avatar"
                />
                <div className="chat-text">{chat.text}</div>
              </div>
            ))
          ) : (
            personalInfo.map((chat, index) => (
              <div
                key={index}
                className={`chat-bubble ${chat.sender === "Dave" ? "left" : "right"} jelly`}
              >
                <Image
                  src={chat.avatar}
                  alt={chat.sender}
                  width={40}
                  height={40}
                  className="avatar"
                />
                <div className="chat-text">{chat.text}</div>
              </div>
            ))
          )}
        </div>

        {!showPersonalInfo && (
          <div className="chat-footer">
            <button
              onClick={handleKenalanClick}
              className="kenalan-button jelly"
            >
              Kenalan Yuk! 🤩
            </button>
          </div>
        )}

        <div className="chat-footer">
          <Link href="/" className="home-button jelly">🏠 Home</Link>
        </div>
      </div>
    </div>
  );
}
