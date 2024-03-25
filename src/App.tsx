import "./App.css";

enum SurType {
  pet = "pet",
  glitch = "glitch",
  liminal = "liminal",
  cool = "cool",
}

const surList = [
  {
    name: "white room",
    url: "http://188.167.181.174:8084/cgi-bin/snapshot.cgi",
    sType: SurType.liminal,
  },
  {
    name: "object detection",
    url: "http://91.247.175.46:8001/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER",
    sType: SurType.glitch,
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
];

function App() {
  return (
    <>
      <h2>🎥👁 jumango surveillance list</h2>
      {surList.map((sur, index) => (
        <div key={index}>
          <img src={sur.url} alt={sur.name} width={320} />
          <p>{sur.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
