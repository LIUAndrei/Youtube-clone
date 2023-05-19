import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ setselectedCategory, selectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setselectedCategory(category.name)}
        key={category.name}
        className='category-btn'
        style={{
          color: 'white',
          background: category.name === selectedCategory && '#FC1503',
        }}
      >
        <span
          style={{
            marginRight: '15px',
            color: category.name === selectedCategory ? 'white' : 'red',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
