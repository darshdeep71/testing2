// import React from 'react'

import React, { useEffect, useState } from 'react'

function Testing1() {


  let [v, setV] = useState("aaa");

  document.addEventListener("visibilitychange", st)
  function st() {
    if (document.visibilityState === "visible") {
      console.log(v)
    }
    else {
      console.log("no")
    }
  }




  // check and reset timer

  let [n, setN] = useState(0);
  let clear = setInterval(check, 10000000)

  function check() {
    if (document.visibilityState === "visible" && n === 40) {
      // console.log(n)
      setF2(n);
      clearInterval(clear);
      // f111()
    }
    else if (document.visibilityState === "visible") {
      n++;
      setN(n)
    }
    else {
      n = 0;
      setN(n);
    }
  }

  // check and reset timer




  let [f22, setF2] = useState(1);
  let [f, setF] = useState()

  useEffect(() => {
    if (f22 != 1) {
      console.log("pata nhi")
      // f22222();
      setTimeout(f22222, 4000)
    }
  }, [f22])
  async function f22222() {
    if (n === 40) {
      // c.preventDefault()
      // setF(document.getElementById('t-b').value);

      let result = await fetch( 'https://testing2-backened.onrender.com/register', {

      // let result = await fetch('http://localhost:1000/register', {

        method: 'post',
        body: JSON.stringify({ f: document.getElementById('t-b').value }),
        headers: { 'Content-Type': 'application/json' },

      })
      result = await result.json();
      setF(result)
      console.log(result)
    }

  }




  let [gd, setGd] = useState([]);

  async function getting() {

    let result = await fetch('https://testing2-backened.onrender.com/get');
    // let result = await fetch('http://localhost:1000/get');
    result = await result.json();
    setGd(result);
    console.log(gd)
    // console.log(gd.length)
    // document.getElementById("div1").innerHTML = gd.length;
    document.getElementById("div1").innerHTML = gd;

  }








  return (
    <div>
      {n}
      <br></br> <br></br>
      {gd}
      <button onClick={getting}>show</button>



      <div>

        <div id='main'>
          <div id='first'>


            <div style={{ backgroundColor: "yello", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 5px" }}>
              <iframe style={{ width: "700px", height: "400px" }} id='js_video_iframe' src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>



            {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        id="js_video_iframe"
        src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div> */}








          </div>
          <div id='second'>



            <div style={{ backgroundColor: "yello", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 5px" }}>
              <iframe style={{ width: "700px", height: "400px" }} id='js_video_iframe' src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>



            {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        id="js_video_iframe"
        src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div> */}










          </div>
          <div id='third'>




            <div style={{ backgroundColor: "yello", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 5px" }}>
              <iframe style={{ width: "700px", height: "400px" }} id='js_video_iframe' src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>




            {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        id="js_video_iframe"
        src="https://jumpshare.com/embed/xPakEMZ3oqWYMNDK5Kkv"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div> */}








          </div>
        </div>

        <input type='text' value="4444444" id='t-b' onChange={st}></input> <br></br>  <br></br>
        {/* <button onClick={f22222}>Submit</button> */}
        {/* <p>isto agla button hai usto baad div hai ---</p> */}
        
        {/* <div>show button dabake data niche aayega</div> */}
        <div id='div1'></div>
      </div>



    </div>
  )
}

export default Testing1