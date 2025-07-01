import HeaderUserBlock from './HeaderUserBlock'
import LogoBlock from './LogoBlock'
import SearchBlock from './SearchBlock'

const Header = () => {
  return (
    <header
      className="bg-white w-full md:shadow-(--shadow-default) 
    flex flex-col md:flex-row gap-y-5 xl:gap-y-7 
    md:gap-10 p-2 justify-center relative z-10"
    >
      <div className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow-(--shadow-default) md:shadow-none">
        <LogoBlock />
        <SearchBlock />
      </div>
      <nav aria-label="Основное меню">
        <HeaderUserBlock />
      </nav>
    </header>
  )
}

export default Header
