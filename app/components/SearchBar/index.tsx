import styles from './styles.module.css'

import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
  return (
    <form className={styles.searchBar} action="#" method="post">
      <input type="text" name="search" id="search" placeholder='Search for Shoes' />
      <input type="hidden" name="send" id="send" />
      <button type="submit" name="submit" id="submit"><AiOutlineSearch /></button>
    </form>
  )
}