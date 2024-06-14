

import sabers from '../assets/sabers.svg'

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-light text-center p-3 mt-3">
            <img src={sabers} alt="" width="100" />
            <p>Star Wars Blog</p>
            <p>2024</p>
        </footer>

    </div>
  )
}

export default Footer