import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'
const Videos = ({ videos, direction }) => {
  if (!videos) return 'Loading...'
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((videoItem, i) => (
        <Box key={i}>
          {videoItem.id.videoId && <VideoCard video={videoItem} />}
          {videoItem.id.channelId && <ChannelCard channelDetail={videoItem} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
