import s from './Header.module.css'

interface SearchProps {
    searchTerm: any,
    setSearchTerm: any,
    sortByLetter: any
}

const Header = ({ searchTerm, setSearchTerm, sortByLetter }: SearchProps) => {
    return (
        <header>
            <div className={s.app_title__name}>
                <h1 className={s.app_title}>Your IT Soft</h1>
            </div>
            <div className={s.options}>
                <div className={s.nameFilter}>
                    <button className={s.a_z} onClick={sortByLetter}>A-Z</button>
                </div>
                <div className={s.app_search}>
                    <input
                        value={searchTerm}
                        type="text"
                        placeholder='Search'
                        className={s.user_search}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;