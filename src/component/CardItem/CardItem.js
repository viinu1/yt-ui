import { useRef } from 'react';
import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// import { useRef } from 'react';

function CardItem({ data, videoBasic }) {
    const videoRef = useRef(null);
    // console.log(data);
    // const handleMouseEnter = () => {
    //     videoRef.current.play();
    // };
    // const handleMouseLeave = () => {
    //     videoRef.current.currentTime = 0;
    //     videoRef.current.pause();
    // };

    // let componentMedia = 'img';
    // let src = data?.snippet?.thumbnails.medium.url;
    // if (Object.keys(data).length) {
    //     componentMedia = 'video';
    //     src = videoBasic.src;
    // }

    return (
        <Card
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            sx={{ width: { md: '330px', xs: '100%' }, boxShadow: 'none' }}
        >
            <Link
                to={data?.id?.videoId ? `/videos/${data.id.videoId}` : '/videos/vanvi'}
                style={{ textDecoration: 'none ', color: '#000' }}
            >
                <CardMedia
                    component="img"
                    alt={data?.snippet?.title || videoBasic.title}
                    sx={{ width: '320px', height: '180px' }}
                    src={data?.snippet?.thumbnails.medium.url}
                    ref={videoRef}
                    muted
                />
            </Link>
            <CardContent sx={{ p: 0 }}>
                <Link
                    to={data?.id?.videoId ? `/videos/${data.id.videoId}` : '/videos/vanvi'}
                    style={{ textDecoration: 'none ', color: '#000' }}
                >
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        color="#000"
                        fontSize="16px"
                        sx={{ height: '32px', lineHeight: '16px', overflow: 'hidden', mt: 1.2 }}
                    >
                        {data?.snippet?.title || videoBasic.title}
                    </Typography>
                </Link>
                <Link
                    to={data?.snippet?.channelId ? `/channel/${data.snippet.channelId}` : '/videos/vanvi'}
                    style={{ textDecoration: 'none ' }}
                >
                    <Typography variant="body1" fontWeight={300} color="#000" fontSize="16px">
                        {data?.snippet?.channelTitle || videoBasic.channel}
                        <CheckCircle sx={{ color: 'blue', fontSize: '12px', ml: '5px' }} />
                    </Typography>
                </Link>
                <Typography variant="body1" fontWeight={300} color="#000" fontSize="12px">
                    18N Lượt xem 2 ngày trước
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardItem;
