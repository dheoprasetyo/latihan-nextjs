import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto pb-3">
          <span>Copyright &copy; Your Website {year}</span>
        </div>
      </div>
    </footer>
  );
}