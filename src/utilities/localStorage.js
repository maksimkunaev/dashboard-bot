function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    if (e === 'QUOTA_EXCEEDED_ERR') {
      console.log('EXCEEDED');
    }
    console.log(e);
  }
}

function get(key) {
  return JSON.parse(localStorage.getItem(key));
}

export default {
  save,
  get,
}