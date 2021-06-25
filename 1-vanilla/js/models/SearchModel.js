const data = [
  {
    id: 1,
    name: '스테이크',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1WHofNnyl4Rqk8LKoaS_w_Zb1tJroBrsB7MwySqxqKJAMlWRIqlPDHwUjCU&usqp=CAc'
  },
  {
    id: 2,
    name: '파스타',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIl_wvIJ6vHhoCrO-DowD_z__Mv7H-csYu9Q&usqp=CAU'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}