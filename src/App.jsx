import { useMemo, useState } from "react";
import "./App.css";

const photos = Array.from(
  { length: 12 },
  (_, i) => `/photos/memory${i + 1}.jpeg`
);

const bouquets = [
  {
    id: "roses",
    emoji: "🌹",
    name: "Forever Roses",
    note: "For all the beautiful memories.",
  },
  {
    id: "tulips",
    emoji: "🌷",
    name: "Soft Tulips",
    note: "For the softest, happiest moments.",
  },
  {
    id: "sunflowers",
    emoji: "🌻",
    name: "Sunshine",
    note: "Because you bring your own sunshine.",
  },
];

const songs = [
  {
    id: "until-found-you",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    mood: "soft, nostalgic & dreamy",
    youtubeId: "GxldQ9eX2wo",
    youtubeUrl:
      "https://www.youtube.com/watch?v=GxldQ9eX2wo",
    thumbnail:
      "https://i.ytimg.com/vi/GxldQ9eX2wo/hqdefault.jpg",
  },
  {
    id: "die-with-a-smile",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    mood: "romantic & cinematic",
    youtubeId: "kPa7bsKwL-c",
    youtubeUrl:
      "https://www.youtube.com/watch?v=kPa7bsKwL-c",
    thumbnail:
      "https://i.ytimg.com/vi/kPa7bsKwL-c/hqdefault.jpg",
  },
  {
    id: "perfect",
    title: "Perfect",
    artist: "Ed Sheeran",
    mood: "romantic, warm & timeless",
    youtubeId: "2Vv-BfVoq4g",
    youtubeUrl:
      "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    thumbnail:
      "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
  },
];

const balloons = [
  {
    id: 1,
    color: "pink",
    label: "A little memory 💌",
    photo: 1,
    text: "Some moments are ordinary until they become our favourite memories.",
  },
  {
    id: 2,
    color: "blue",
    label: "A little thank you 🤍",
    photo: 2,
    text: "Thank you for understanding me even when I can't explain myself properly.",
  },
  {
    id: 3,
    color: "peach",
    label: "A little laugh 😂",
    photo: 3,
    text: "Your childish side has given me way too many reasons to smile.",
  },
  {
    id: 4,
    color: "mint",
    label: "A little promise 🫂",
    photo: 4,
    text: "No matter how much life changes, I'll always be there for you.",
  },
  {
    id: 5,
    color: "rose",
    label: "A little comfort ✨",
    photo: 5,
    text: "With you, I never feel like I have to pretend to be someone else.",
  },
  {
    id: 6,
    color: "gold",
    label: "A little gratitude 🧿",
    photo: 6,
    text: "I'm genuinely grateful that you became such a beautiful part of my life.",
  },
  {
    id: 7,
    color: "violet",
    label: "A little wish 🎂",
    photo: 7,
    text: "I hope this year gives you reasons to laugh, grow, and feel proud of yourself.",
  },
  {
    id: 8,
    color: "sky",
    label: "One last secret 💗",
    photo: 9,
    text: "These memories will always have a special little place in my heart.",
  },
];

const starMemories = [
  {
    id: 1,
    image: "/photos/star1.jpeg",
    caption: "One of those moments I'll always remember ✨",
  },
  {
    id: 2,
    image: "/photos/star2.jpeg",
    caption: "A memory that still makes me smile 🤍",
  },
  {
    id: 3,
    image: "/photos/star3.jpeg",
    caption: "Proof that the simplest moments can mean the most 🌙",
  },
  {
    id: 4,
    image: "/photos/star4.jpeg",
    caption: "A little piece of our beautiful chaos 🫶🏻",
  },
  {
    id: 5,
    image: "/photos/star5.jpeg",
    caption: "This one deserves a permanent place in my memories 💗",
  },
  {
    id: 6,
    image: "/photos/star6.jpeg",
    caption: "Some memories never really get old ✨",
  },
  {
    id: 7,
    image: "/photos/star7.jpeg",
    caption: "A moment worth keeping forever 🧿",
  },
  {
    id: 8,
    image: "/photos/star8.jpeg",
    caption: "And somehow, this became one of my favourites 🌷",
  },
];

/* ================================
   LETTER
================================ */

const letterParagraphs = [
  "Saharsh💗, honestly, kuthe pasun start karu hech kalat nahi, because these past few months have somehow become so special to me without me even realizing it. 🫶🏻",

  "From our stupid conversations and random laughs to those small-small moments, kahi kahi moments khup simple hote, pan somehow te sagle manat rahun gele. ❤️ Tujha immature and childish side sometimes literally mala khup hasavto, but at the same time, tujhya madhli loyalty ani tujhya close lokansathi tu jya padhatine nehmich ubha rahtos, te mala genuinely khup avadta🫂...",

  "Tujhyasobat ek veglach comfort feel hoto, jithe mala kahi pretend karaychi garaj nahi, jast overthink karaychi garaj nahi, fakt jashi aahe tashi rahata yet. ✨ Ani honestly, thank you majhya sobat nehmich rahilyabaddal ani mala kadhi judge na karta samjun ghetlyabaddal....",

  "Kadhikadhi mala swatahlach majhya feelings explain karta yet nahit, pan tarihi tu mala samjun ghenyacha prayatna kartos, ani te majhyasathi khup matter karta. 🤍",

  "Ya kahi months madhye aapan itke random moments, jokes, conversations, teasing, misunderstandings ani memories create kele aahet, ki kadhikadhi vichar kela ki itka sagla kadhi zala kalalach nahi. Pan jevha mage valun baghte, tevha he sagle little moments fakt smile aanun detat. 🤍",

  "Ani ek goshta fakt nehmi lakshat thev, no matter what happens, life kiti hi change zali tari, I’ll always be there for you. 🫂❤️",

  "Ya saglya memories sathi, tya saglya laughs sathi, mala samjun ghenyasathi ani majhya life cha itka sundar part banlyabaddal mi genuinely khup grateful aahe. Ani pudhe kahi hi change zala tari, these memories will always have a special place in my heart. 🧿✨❤️",

  "Ani ek goshta nehmi lakshat thev, tujhya life madhe tu khup pudhe jashil, mala tyachi full confidence aahe. Koni kahi hi judge kela, kahi hi bolla tari swatahvarcha confidence kadhi kami hou deu nakos. Tu jasa ahes tasach raha, because tujhya madhye khup potential aahe. Ani no matter what happens, mi nehmi tujhya sobat asnar, tujhya good days madhe pan ani tough days madhe pan. Fakt swatahvarcha vishwas thev ani nehmi confident raha. 🫂❤️🧿✨",
];

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [screen, setScreen] = useState("welcome");
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [selectedBouquet, setSelectedBouquet] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

  const [popped, setPopped] = useState([]);
  const [modal, setModal] = useState(null);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [showMystery, setShowMystery] = useState(false);

  const stars = useMemo(() => {
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      size: `${Math.random() * 4 + 2}px`,
    }));
  }, []);

  const balloonPositions = useMemo(() => {
    const cols = 4;
    const rows = 2;

    return balloons.map((_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      const cellW = 100 / cols;
      const cellH = 100 / rows;

      return {
        left: `${col * cellW + cellW * (0.25 + Math.random() * 0.5)}%`,
        top: `${row * cellH + cellH * (0.28 + Math.random() * 0.44)}%`,
        rotate: `${Math.round(Math.random() * 18 - 9)}deg`,
        scale: 0.9 + Math.random() * 0.18,
      };
    });
  }, []);

  const checkPassword = (e) => {
    e.preventDefault();

    if (password.toLowerCase().trim() === "saharsh") {
      setUnlocked(true);
      setPasswordError("");
    } else {
      setPasswordError("Hmm... that's not the secret word 💭");
    }
  };

  const nextScreen = (next) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setScreen(next);
  };

  const blowCandles = () => {
    if (candlesBlown) return;

    setCandlesBlown(true);

    setTimeout(() => {
      nextScreen("bouquet");
    }, 1800);
  };

  const chooseBouquet = (bouquet) => {
    setSelectedBouquet(bouquet);
    nextScreen("songs");
  };

  const chooseSong = (song) => {
    setSelectedSong(song);
    nextScreen("balloons");
  };

  const popBalloon = (balloon) => {
    if (popped.includes(balloon.id)) return;

    setPopped((prev) => [...prev, balloon.id]);

    setModal({
      type: "balloon",
      data: balloon,
    });
  };

  const openStar = (star) => {
    setModal({
      type: "star",
      data: star,
    });
  };

  const openLetter = () => {
    nextScreen("letter");
  };

  const unlockSecret = () => {
    setSecretUnlocked(true);
  };

  const goToFinal = () => {
    setShowMystery(true);
  };

  if (!unlocked) {
    return (
      <div className="password-page">
        <div className="password-stars">
          {stars.map((star) => (
            <span
              key={star.id}
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        <div className="password-card">
          <div className="lock-icon">🔐</div>

          <p className="eyebrow">A tiny secret awaits</p>

          <h1>Only for Saharsh 💗</h1>

          <p className="password-text">
            This little world has been made especially for you.
            <br />
            Enter the secret word to open it.
          </p>

          <form onSubmit={checkPassword}>
            <input
              type="password"
              placeholder="Enter secret word..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />

            <button className="primary-btn" type="submit">
              Open My Surprise ✨
            </button>
          </form>

          {passwordError && (
            <p className="password-error">{passwordError}</p>
          )}

          <span className="tiny-note">made with lots of love ♡</span>
        </div>
      </div>
    );
  }

  return (
    <main className="app">

      {/* =========================================
          BACKGROUND MUSIC
          Invisible YouTube player
      ========================================= */}
      {selectedSong && (
        <iframe
          key={selectedSong.youtubeId}
          src={`https://www.youtube.com/embed/${selectedSong.youtubeId}?autoplay=1&controls=0&playsinline=1&rel=0&origin=${encodeURIComponent(
            window.location.origin
          )}`}
          title="Background music"
          allow="autoplay; encrypted-media"
          style={{
            position: "fixed",
            width: "1px",
            height: "1px",
            left: "-20px",
            bottom: "-20px",
            border: "0",
            opacity: 0,
            pointerEvents: "none",
          }}
        />
      )}

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div className="floating-stars">
        {stars.map((star) => (
          <span
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <button
          className="logo"
          onClick={() => nextScreen("welcome")}
        >
          S<span>♡</span>
        </button>

        <div className="topbar-text">
          made specially for <strong>Saharsh</strong>
        </div>
      </header>

      {/* WELCOME */}
      {screen === "welcome" && (
        <section className="screen welcome-screen">
          <div className="welcome-content">
            <span className="eyebrow">
              A little world made for you
            </span>

            <h1 className="welcome-title">
              To the boy who makes
              <br />
              <span>ordinary days special ✦</span>
            </h1>

            <div className="welcome-magic">
              <div className="magic-card">
                <span className="magic-icon">✦</span>

                <div>
                  <strong>A memory vault</strong>

                  <p>
                    A few moments that quietly became
                    my favourites.
                  </p>
                </div>
              </div>

              <div className="magic-card">
                <span className="magic-icon">♡</span>

                <div>
                  <strong>A little chaos</strong>

                  <p>
                    Some laughs, some madness and a lot
                    of “what are we doing?”
                  </p>
                </div>
              </div>

              <div className="magic-card">
                <span className="magic-icon">✧</span>

                <div>
                  <strong>One tiny secret</strong>

                  <p>
                    Keep going... because the best part
                    is still waiting.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="primary-btn opening-btn"
              onClick={() => nextScreen("birthday")}
            >
              Enter Your Little World ✨
            </button>
          </div>
        </section>
      )}

      {/* BIRTHDAY + CAKE */}
      {screen === "birthday" && (
        <section className="screen cake-screen">
          <div className="section-heading">
            <span className="eyebrow">First surprise</span>

            <h2>Make a wish, birthday boy 🎂</h2>

            <p>
              Close your eyes, make a wish and blow the candles. ✨
            </p>
          </div>

          <div
            className={`cake-area ${
              candlesBlown ? "blown" : ""
            }`}
            onClick={blowCandles}
          >
            <div className="cake-glow" />

            <div className="cake">
              <div className="candle-row">
                {[1, 2, 3, 4, 5].map((candle) => (
                  <div
                    className="candle-wrap"
                    key={candle}
                  >
                    <div className="flame">
                      <span />
                    </div>

                    <div className="smoke">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="candle">
                      <i />
                      <i />
                    </div>
                  </div>
                ))}
              </div>

              <div className="cake-top">
                <div className="cream cream-one" />
                <div className="cream cream-two" />
                <div className="cherry">🍒</div>
              </div>

              {/* HAPPY */}
              <div className="cake-layer layer-one">
                <span>HAPPY</span>

                <div className="cake-ribbon">
                  <span>♡</span>
                </div>
              </div>

              {/* BIRTHDAY */}
              <div className="cake-layer layer-two">
                <span>BIRTHDAY</span>

                <div className="cake-ribbon ribbon-lower">
                  <span>✦</span>
                </div>
              </div>

              {/* SAHARSH */}
              <div className="cake-name">
                SAHARSH
              </div>

              <div className="cake-bottom" />
            </div>
          </div>

          <button
            className="primary-btn"
            onClick={blowCandles}
          >
            {candlesBlown
              ? "Wish made ✨"
              : "Blow the Candles 🕯️"}
          </button>

          {candlesBlown && (
            <p className="success-message">
              Wish accepted by the universe ✨💗
            </p>
          )}
        </section>
      )}

      {/* BOUQUETS */}
      {screen === "bouquet" && (
        <section className="screen">
          <div className="section-heading">
            <span className="eyebrow">Second surprise</span>

            <h2>Pick a bouquet for yourself 🌷</h2>

            <p>
              Each bouquet carries a different little feeling.
            </p>
          </div>

          <div className="bouquet-grid">
            {bouquets.map((bouquet) => (
              <button
                className={`bouquet-card ${
                  selectedBouquet?.id === bouquet.id
                    ? "selected"
                    : ""
                }`}
                key={bouquet.id}
                onClick={() => chooseBouquet(bouquet)}
              >
                <div className="bouquet-icon">
                  {bouquet.emoji}
                </div>

                <h3>{bouquet.name}</h3>

                <p>{bouquet.note}</p>

                <span>Choose this ✦</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SONGS */}
      {screen === "songs" && (
        <section className="screen">
          <div className="section-heading">
            <span className="eyebrow">
              Your soundtrack
            </span>

            <h2>Pick the song 🎧</h2>

            <p>
              Your {selectedBouquet?.name || "bouquet"} deserves
              its own soundtrack.
            </p>
          </div>

          <div className="song-grid">
            {songs.map((song) => (
              <button
                className={`song-card ${
                  selectedSong?.id === song.id
                    ? "selected"
                    : ""
                }`}
                key={song.id}
                onClick={() => chooseSong(song)}
              >
                <div className="song-image-wrap">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                  />

                  <div className="play-circle">
                    ▶
                  </div>
                </div>

                <div className="song-info">
                  <h3>{song.title}</h3>

                  <p>{song.artist}</p>

                  <span>{song.mood}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedSong && (
            <div className="song-player-card">
              <div>
                <small>Now playing</small>

                <h3>{selectedSong.title}</h3>
              </div>

              <a
                href={selectedSong.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Open on YouTube ↗
              </a>
            </div>
          )}
        </section>
      )}

      {/* BALLOONS */}
      {screen === "balloons" && (
        <section className="screen balloon-screen">
          <div className="section-heading">
            <span className="eyebrow">
              A little game
            </span>

            <h2>Pop the balloons 🎈</h2>

            <p>
              Every balloon is hiding a little memory from me
              to you.
            </p>
          </div>

          <div className="balloon-grid random-balloon-field">
            {balloons.map((balloon, index) => {
              const isPopped = popped.includes(
                balloon.id
              );

              const position =
                balloonPositions[index];

              return (
                <button
                  key={balloon.id}
                  className={`balloon-item ${
                    isPopped ? "popped" : ""
                  }`}
                  onClick={() => popBalloon(balloon)}
                  disabled={isPopped}
                  style={{
                    position: "absolute",
                    left: position.left,
                    top: position.top,
                    transform: `translate(-50%, -50%) rotate(${position.rotate}) scale(${position.scale})`,
                    zIndex: 2 + index,
                    "--balloon-a":
                      index % 2 === 0
                        ? "#ff8fcf"
                        : "#9d8cff",
                    "--balloon-b":
                      index % 2 === 0
                        ? "#c85cff"
                        : "#668cff",
                  }}
                >
                  {!isPopped ? (
                    <>
                      <div className="balloon-shape">
                        <span>♡</span>
                      </div>

                      <div className="balloon-string" />
                    </>
                  ) : (
                    <span className="pop-text">
                      POP! ✨
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {popped.length === balloons.length && (
            <button
              className="primary-btn"
              onClick={openLetter}
            >
              Read the letter 💌
            </button>
          )}
        </section>
      )}

      {/* LETTER */}
      {screen === "letter" && (
        <section className="screen letter-screen">
          <div className="section-heading">
            <span className="eyebrow">
              Something from my heart
            </span>

            <h2>A letter for you 💌</h2>
          </div>

          <div className="letter-layout">
            {/* PHOTO RIGHT */}
            <div className="letter-photo-card">
              <div className="photo-tape" />

              <img
                src={photos[8]}
                alt="Saharsh memory"
              />

              <div className="photo-caption">
                <span>
                  one of my favourite memories
                </span>

                <strong>♡</strong>
              </div>
            </div>

            {/* VINTAGE LETTER */}
            <article className="letter-card">
              <div className="letter-paper-decoration">
                ✦
              </div>

              {letterParagraphs.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="letter-signature">
                Always cheering for you,
                <br />
                <span>♡</span>
              </div>
            </article>
          </div>

          <button
            className="primary-btn"
            onClick={() => nextScreen("stars")}
          >
            Keep going ✨
          </button>
        </section>
      )}

      {/* STARS */}
      {screen === "stars" && (
        <section className="screen stars-screen">
          <div className="section-heading">
            <span className="eyebrow">
              Memory constellation
            </span>

            <h2>
              Some memories shine differently ✨
            </h2>

            <p>
              Tap the stars and discover them.
            </p>
          </div>

          <div className="memory-stars">
            {starMemories.map((star, index) => (
              <button
                key={star.id}
                className={`memory-star star-position-${
                  index + 1
                }`}
                onClick={() => openStar(star)}
              >
                <span className="star-icon">
                  ✦
                </span>

                <small>
                  memory {star.id}
                </small>
              </button>
            ))}
          </div>

          <button
            className="primary-btn"
            onClick={() => nextScreen("secret")}
          >
            There's one more thing... 🌙
          </button>
        </section>
      )}

      {/* SECRET ROOM */}
      {screen === "secret" && (
        <section className="screen secret-screen">
          <div className="secret-card">
            <div className="secret-symbol">
              ✦
            </div>

            <span className="eyebrow">
              The secret room
            </span>

            {!secretUnlocked ? (
              <>
                <h2>
                  One last little secret 🤫
                </h2>

                <p>
                  Not everything in this website was
                  meant to be found immediately.
                </p>

                <button
                  className="primary-btn"
                  onClick={unlockSecret}
                >
                  Reveal the secret ✨
                </button>
              </>
            ) : (
              <>
                <h2>You found it! 💗</h2>

                <p className="secret-message">
                  If you reached this far, I hope you
                  know how genuinely special you are
                  to me.
                  <br />
                  <br />
                  And yes... there is still one final
                  surprise waiting. 👀
                </p>

                <button
                  className="primary-btn"
                  onClick={goToFinal}
                >
                  Open the final surprise 🎁
                </button>
              </>
            )}
          </div>
        </section>
      )}

      {/* MYSTERY */}
      {showMystery && screen === "secret" && (
        <div className="mystery-overlay">
          <div className="mystery-card">
            <div className="gift-box">🎁</div>

            <h2>
              Wait... that's not all 😭
            </h2>

            <p>
              You really thought the surprise was over?
            </p>

            <div className="mystery-buttons">
              <button
                className="secondary-btn"
                onClick={() => {
                  setShowMystery(false);
                  nextScreen("final");
                }}
              >
                Open it 💗
              </button>

              <button
                className="ghost-btn"
                onClick={() =>
                  setShowMystery(false)
                }
              >
                Maybe later 👀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FINAL */}
      {screen === "final" && (
        <section className="screen final-screen">
          <div className="final-content">
            <span className="eyebrow">
              The end... maybe ♡
            </span>

            <h1>
              Happyyy Birthdayyy,
              <br />
              <span>
                Dear Saharshhhh.. 🎂💗
              </span>
            </h1>

            <div className="final-photo">
              <img
                src={photos[11]}
                alt="Final birthday memory"
              />
            </div>

            <p className="final-text">
              I hope this little corner of the internet
              made you smile, because you deserve all
              the happiness, laughter and beautiful
              moments life has to offer. ✨
            </p>

            <div className="final-hearts">
              ♡ ✦ ♡ ✦ ♡
            </div>

            <button
              className="primary-btn"
              onClick={() =>
                nextScreen("welcome")
              }
            >
              Replay the surprise ↻
            </button>
          </div>
        </section>
      )}

      {/* MODAL */}
      {modal && (
        <div
          className="modal-backdrop"
          onClick={() => setModal(null)}
        >
          <div
            className="memory-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-modal"
              onClick={() => setModal(null)}
            >
              ×
            </button>

            <div className="modal-image-wrap">
              <img
                src={
                  modal.type === "balloon"
                    ? photos[modal.data.photo - 1]
                    : modal.data.image
                }
                alt="Memory"
                style={
                  modal.type === "star"
                    ? {
                        objectFit: "contain",
                        objectPosition: "center",
                      }
                    : undefined
                }
              />
            </div>

            <div className="modal-content">
              {modal.type === "balloon" ? (
                <>
                  <span className="modal-label">
                    {modal.data.label}
                  </span>

                  <p>
                    {modal.data.text}
                  </p>
                </>
              ) : (
                <>
                  <span className="modal-label">
                    Memory #{modal.data.id}
                  </span>

                  <p>
                    {modal.data.caption}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;