var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

export default [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      date:`05/12/2002`,
      month:mm,
      day:dd+1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      date:`04/01/2002`,
      month:mm+1,
      day:dd,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      date:`06/01/2002`,
      month:mm+1,
      day:dd+2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      date:`04/12/2002`,
      month:mm,
      day:dd,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      date:`04/12/2002`,
      month:mm,
      day:dd,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];