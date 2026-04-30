export default function Header({ setPage }) {
  return (
    <header>
      <h1>LEZZETLİ YEMEKLER</h1>

      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("home")}>
              Anasayfa
            </button>
          </li>

          <li>
            <button onClick={() => setPage("about")}>
              Hakkımızda
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}