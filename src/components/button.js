import React from 'react';

function Button(props) {

  return (
    <div>
      <label>Serarch for abstract here</label> <button >smaple paper</button> <br></br> <br></br>
      <button >Elsevier</button>
      <button >Jstor</button>
      <button >Sciencedirect</button>
      <button >Ieee Explore</button>
      <button >Ebsoc</button> <br></br> <br></br>
      <label>sample abstract</label> <br></br> <br></br>
      <textarea placeholder='sample abstract' type='text' value={props.Input} /> <br></br> <br></br>
      <label>Analysis</label> <br></br> <br></br>
      <label>Title</label> <br></br>
      <input placeholder='Natural Language process' type='text' /> <br></br> <br></br>
      <label>Purpose and siginifice</label> <br></br> <br></br>
      <textarea placeholder='Purpose' type='text' maxlength="25" /> <br></br> <br></br>
      <label>Design</label> <br></br> <br></br>
      <textarea placeholder='Description' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Knowlege</label> <br></br> <br></br>
      <textarea placeholder='Gap Limitaions' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Research</label> <br></br> <br></br>
      <textarea placeholder='Statement' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Plan</label> <br></br> <br></br>
      <textarea placeholder='study' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Major trends</label> <br></br> <br></br>
      <textarea placeholder='Findings' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Conclusion</label> <br></br> <br></br>
      <textarea placeholder='Implications' type='text' maxlength="35" /> <br></br> <br></br>
      <label>Your abstract</label> <br></br> <br></br>
      <textarea placeholder='Purpose' type='text' maxlength="200" /> <br></br> <br></br>
    </div>
  )
}

export default Button;