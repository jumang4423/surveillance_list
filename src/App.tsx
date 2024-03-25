import { useEffect, useState } from "react";
import "./init.css";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Markdown from "react-markdown";
import { motion } from "framer-motion";

const normalWi = 180;
const bigWi = 1000;

enum SurType {
  all = "＼(◎o◎)／！",
  cool = "cool",
  glitch = "glitch",
  liminal = "liminal",
  pet = "pet",
}

interface SurListType {
  name: string;
  url: string;
  sType: SurType;
  manualUpdate?: boolean;
  isBig?: boolean;
}

const loop = (char: string, num: number) => {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += char;
  }
  return str;
};

const surList: SurListType[] = [
  {
    name: "white room",
    url: "http://188.167.181.174:8084/cgi-bin/snapshot.cgi",
    sType: SurType.liminal,
  },
  {
    name: "object detection",
    url: "http://91.247.175.46:8001/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
    // isBig: true,
  },
  {
    name: "red room",
    url: "http://213.89.59.190:8080/?action=stream",
    sType: SurType.liminal,
  },
  {
    name: "nostalgia beach",
    url: "http://96.72.166.84:8000/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
    sType: SurType.cool,
  },
  {
    name: "lazy cow chan",
    url: "http://67.55.176.8:8080/webcapture.jpg?command=snap&channel=1?1711307958",
    sType: SurType.pet,
  },
  {
    name: "decent life",
    url: "http://67.49.47.102:81/mjpg/video.mjpg",
    sType: SurType.cool,
  },
  {
    name: "burning",
    url: "http://80.153.66.33:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.cool,
  },
  {
    name: "high",
    url: "http://87.138.157.245:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "happy hda",
    url: "http://118.232.99.149:80/asp/video.cgi",
    sType: SurType.liminal,
  },
  {
    name: "house surveillance",
    url: "http://37.24.61.169:8081/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "parano",
    url: "http://217.128.94.112:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "purble fil",
    url: "http://217.41.66.17:84/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1711308928",
    sType: SurType.glitch,
  },
  {
    name: "bunch dogs",
    url: "http://77.162.93.116:80/img/video.mjpeg",
    sType: SurType.pet,
  },
  {
    name: "bone hous",
    url: "http://213.102.153.87:8081/mjpg/video.mjpg",
    sType: SurType.glitch,
  },
  {
    name: "mozaic",
    url: "http://77.56.217.178:89/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "nojo",
    url: "http://77.119.250.105:8084/?action=stream",
    sType: SurType.cool,
  },
  {
    name: "denpa",
    url: "http://80.61.63.103:81/cam_1.cgi",
    sType: SurType.glitch,
  },
  {
    name: "win",
    url: "http://73.111.190.47:80/mjpg/video.mjpg",
    sType: SurType.cool,
  },
  {
    name: "vota",
    url: "http://202.39.55.7:8080/GetData.cgi?CH=1",
    sType: SurType.cool,
  },
  {
    name: "cows",
    url: "http://122.252.152.146:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.pet,
  },
  {
    name: "kewl glich",
    url: "http://5.104.177.125:8080/?action=stream",
    sType: SurType.glitch,
  },
  {
    name: "moving cam",
    url: "http://74.104.182.37:80/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
    sType: SurType.cool,
  },
  {
    name: "recording rom",
    url: "http://152.30.169.250:80/mjpg/video.mjpg",
    sType: SurType.cool,
  },
  {
    name: "豪邸",
    url: "http://50.248.63.9:86/mjpg/video.mjpg",
    sType: SurType.cool,
  },
  {
    name: "tiwan offc",
    url: "http://210.71.170.17/webcapture.jpg?command=snap&channel=1?",
    sType: SurType.cool,
    manualUpdate: true,
  },
  {
    name: "ward",
    url: "http://115.94.45.26:8000/webcapture.jpg?command=snap&channel=1?",
    sType: SurType.liminal,
  },
  {
    name: "red room2",
    url: "http://119.252.169.189:85/snap.jpg?JpegSize=M&JpegCam=1&r=",
    sType: SurType.glitch,
    manualUpdate: true,
  },
  {
    name: "lovely dogs",
    url: "http://72.131.101.79:90/mjpg/video.mjpg",
    sType: SurType.pet,
  },
  {
    name: "hot af",
    url: "http://96.94.90.35:80/mjpg/video.mjpg",
    sType: SurType.glitch,
  },
  {
    name: "奴が来る",
    url: "http://114.179.35.69:80/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
    sType: SurType.glitch,
  },
  {
    name: "work",
    url: "http://153.156.230.207:8081/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
    sType: SurType.cool,
  },
  {
    name: "hos",
    url: "http://195.122.250.199:8081/image/Index?time=",
    sType: SurType.liminal,
    manualUpdate: true,
  },
  {
    name: "yokohama drift",
    url: "http://153.142.207.157:80/-wvhttp-01-/GetOneShot?image_size=640x480&frame_count=1000000000",
    sType: SurType.cool,
  },
  {
    name: "sur",
    url: "http://87.138.80.32:88/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "gli4",
    url: "http://210.226.45.57:8081/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
  },
  {
    name: "kimo tree",
    url: "http://206.40.97.180:80/mjpg/video.mjpg",
    sType: SurType.glitch,
  },
  {
    name: "play room",
    url: "http://158.193.88.246:8080/?action=stream",
    sType: SurType.liminal,
  },
  {
    name: "pika",
    url: "http://203.141.205.183:80/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;",
    sType: SurType.glitch,
    manualUpdate: true,
  },
  {
    name: "kaidan",
    url: "http://178.46.128.247:8090/mjpg/video.mjpg",
    sType: SurType.liminal,
  },
  {
    name: "uni",
    url: "http://131.95.3.178:80/mjpg/video.mjpg",
    sType: SurType.cool,
  },
  {
    name: "bye2",
    url: "http://173.13.122.229:2000/oneshotimage1?",
    sType: SurType.liminal,
    manualUpdate: true,
  },
  {
    name: "almost gif",
    url: "http://80.73.112.172:80/mjpg/video.mjpg",
    sType: SurType.glitch,
  },
  {
    name: "i love fish",
    url: "http://216.54.27.7:80/mjpg/video.mjpg",
    sType: SurType.pet,
  },
];

surList.sort(() => Math.random() - 0.5);

function App() {
  const [unixTime, setUnixTime] = useState<number>(-1);
  const [filtername, setFiltername] = useState<SurType>(SurType.all);
  const [matrixTxt, setMatrixTxt] = useState<string>("");
  useEffect(() => {
    // load matrix text
    const fetchMatrix = async () => {
      const res = await fetch("/matrix.md");
      const txt = await res.text();
      setMatrixTxt(txt);
    };
    fetchMatrix();
    const interval = setInterval(() => {
      setUnixTime(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "2000vh",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <img src={"/aaa.jpg"} alt="aaa" width={normalWi} />
      </Box>
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          padding: "0.5rem",
          fontSize: "1.5rem",
        }}
      >
        🎥👁 jumang4423 surveillance
      </h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={filtername}
          exclusive
          sx={{
            backgroundColor: "white",
            marginBottom: "16px",
          }}
          onChange={(event, newAlignment) => {
            if (newAlignment) {
              setFiltername(newAlignment);
            }
          }}
          aria-label="Platform"
        >
          {Object.values(SurType).map((value) => (
            <ToggleButton key={value} value={value}>
              {value}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <div
        style={{
          textAlign: "center",
          whiteSpace: "pre",
          wordBreak: "break-all",
          width: "100%",
        }}
      >
        <div>
          457f464c0102000100000000000000000002003e000100001000004000000000004000000000000020
        </div>
        <div>
          3000000000000000000000004000380003004000040003000100000004000000000000000000000000
        </div>
        <pre
          style={{
            textAlign: "center",
          }}
        >
          8d4824c2c720110040050fc7483cc000004800ff31050f000000000000000000000000000000000000
          0000000000000000622f6e69722f006d722d0066652f637400000000000000000000732e7368727461
        </pre>
      </div>
      <div
        style={{
          display: "grid",
          margin: "0 200px",
          padding: 0,
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {surList
          .filter(
            (sur) => sur.sType === filtername || filtername === SurType.all
          )
          .map((sur, index) => {
            return (
              <motion.div
                initial={{ scaleY: 1, scaleX: 1 }}
                whileHover={{ scaleX: 2, scaleY: 0.9 }}
                whileTap={{ scaleX: 3, scaleY: 3 }}
                key={index + sur.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={sur.manualUpdate ? `${sur.url}${unixTime}` : sur.url}
                  alt={sur.name}
                  width={sur.isBig ? bigWi : normalWi}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRyencxcjcwMWQ4NmxuNmI4YjloeWl5anB6MHRwcmF2dmZxbW5nNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378w9GS8NljFYx5S/giphy.gif";
                  }}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "gray",
                  }}
                >
                  {sur.name}
                </p>
              </motion.div>
            );
          })}
      </div>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        {loop("*", 30)} owari {loop("*", 30)}
      </div>
      <Box sx={{ margin: "16px" }}>
        <Markdown>{matrixTxt}</Markdown>
      </Box>
    </div>
  );
}

export default App;
