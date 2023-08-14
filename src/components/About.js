import React from 'react'

export default function About(props) {
  return (
    <div>
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mt-5 mb-3'>{props.heading}</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#49505A':'white' , color: props.mode==='dark'?'#D5D5D5':'black'}}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#353B43':'white' , color: props.mode==='dark'?'white':'black'}}>
                Tinker.text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Tinker text is a text based utility app</strong> It allows the user to tinker with text. Manipulation of text in many text styles that are commonly used in coding like kebab case, Camel case, Lower case, Upper case, etc. It also allows the user to coppy the text to clip board to use it somewhere else and also provides text reciting. pause and play feature is good when you need to take a break from listening.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#49505A':'white' , color: props.mode==='dark'?'#D5D5D5':'black'}}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#353B43':'white' , color: props.mode==='dark'?'white':'black'}}>
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Tinker.text is free for all</strong> It is a useful utility that anyone can access and use. It is developed by TSA- thakur sanskar anhal. It was created so a user could easily tinker with the text and make it easy for the users to edit the text and paste it directly to your code editor and code seamlesly.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#49505A':'white' , color: props.mode==='dark'?'#D5D5D5':'black'}}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#353B43':'white' , color: props.mode==='dark'?'white':'black'}}>
                    Recite
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This recite feature is a verry helpful one.</strong> It is an distant feature that allows the user to coppy text from any source and paste it into the tinker.text edditor and reite it. You can simply coppy a word file and paste it to listen to it with the help of tinker.text and seamlesly do your other works while our browser compatable app recites your text so you can focus on productivity and multi tasking. It is a game changer feature that allows you to even pause the reciting when needed.
                </div>
                </div>
            </div>
        </div> 
      </div>
      </>
    </div>
  )
}
