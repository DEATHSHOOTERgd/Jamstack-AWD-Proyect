import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ECUAUTOS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link href="/">
          <a className="nav-link active">COTIZA TU AUTO
            <span className="visually-hidden">(current)</span>
          </a>
          </Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</nav>
  )
}