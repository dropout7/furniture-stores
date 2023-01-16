// import styles of this component
import styles from './masonry-layout.module.css'

// import other react pkg to use
import Masonry from 'react-masonry-css'

// import other component to use
import MasonryBox from './masonry-box'

// MasonryLayout Component
const MasonryLayout = ({ images }: any) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles['my-masonry-grid']}
      columnClassName={styles['my-masonry-grid_column']}
    >
      {images.map((item: any) => (
        <MasonryBox
          key={item.id}
          wallSrc={item.src}
          userProf={item.user.src}
          userName={item.user.name}
          userJob={item.user.job}
        />
      ))}
    </Masonry>
  )
}

export default MasonryLayout
