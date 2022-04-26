import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const ListSkelton = ({ listsToRender }) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          <Box sx={{ flexGrow: 1 }} key={index}>
            <Skeleton height={200} width={250} />
            <Skeleton height={20} width={130} />
            <Skeleton height={30} width={50} />
            <Skeleton height={20} width={60} />
            <Skeleton height={20} width={150} />
            <Skeleton height={60} width={250} />
          </Box>
        ))}
    </>
  )
}

export default ListSkelton
