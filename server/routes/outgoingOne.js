import request from 'superagent'

export function sayHi (theBody) {
  let msg = extractMsg(theBody)
  return request
    .post(`/api/slack`)
    .send({text: msg})
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
    })
}

function extractMsg(theBody) {
  return theBody.event.text.replace(/@/g,'')
}
