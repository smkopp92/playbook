import React from 'react';


const ReactDocsRoot = () =>{

  const aAB = { kit: 'AvatarActionButton', props: {image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg' }}
  const gauge = { kit: 'Gauge', props: { id: 'gauge-default', chart_data: { name: 'Name', value: '45' }}}
  
  let dynKitHTML
  let staticKitHTML
  
  const dynFetch = () =>{
    fetch('/render', {
      // credentials: 'same-origin',
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aAB)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dynKitHTML = data
      document.querySelector("#dyn-kit-html").innerHTML = dynKitHTML.partial
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const staticFetch = () =>{
    fetch('/render', {
      // credentials: 'same-origin',
      // mode: 'no-cors',
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      staticKitHTML = data
      document.querySelector("#static-kit-html").innerHTML = staticKitHTML.partial
    })
    .catch(error =>{
      console.error(error)
    })
  }


  return(
    <>
      <h2>Hello From React Docs Root</h2>
      <button className="mt_xl" onClick={dynFetch}>Dynamic Fetch</button>
      <div id="dyn-kit-html"></div>
      <button className="mt_xl" onClick={staticFetch}>Static Fetch</button>
      <div id="static-kit-html"></div>
    </>
  )
}

export default ReactDocsRoot