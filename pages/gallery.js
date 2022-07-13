import { Box,ImageList,ImageListItem,Backdrop, Card } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'

const itemData=[
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg"
]

export default function Gallery() {

  const [backopen,setback]=useState(false);
  const [img_open,setimg]=useState("");

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      {/* replace this with header */}
      <Box sx={{position:"relative",color:"white",left:0,top:0,width:"100%",height:"4rem"}}>HEADER</Box>

      <ImageList cols={3} rowHeight={400} sx={{overflow:"hidden"}}>
        {itemData.map((item) => (
          <ImageListItem key={item} onClick={()=>{setimg(item);setback(true)}} >
            <img
              src={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Backdrop
        
        open={backopen}
        onClick={()=>{setback(false)}}
      >
          <Card>
            <img
              src={img_open}
              style={{objectFit:"fill",height:"50rem"}}
            />
          </Card>
      </Backdrop>
    </>
  )
}