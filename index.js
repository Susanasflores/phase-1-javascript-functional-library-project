function myEach(collection, callback) {
    let processedCollection;
    if(Array.isArray(collection)) {
    processedCollection = collection;
    }
    else if (typeof collection === 'object') {
    processedCollection = Object.values(collection)
    }
    processedCollection.forEach(element => {
    callback(element)
    })
    return collection
    }

    function myMap(collection, callback) {
        let newArray = [];
      
        if (Array.isArray(collection)) {
          collection.forEach(element => {
            let transformedValue = callback(element);
            newArray.push(transformedValue);
          });
        } else if (typeof collection === 'object') {
          Object.values(collection).forEach(element => {
            let transformedValue = callback(element);
            newArray.push(transformedValue);
          });
        }
        return newArray;
      }
      function myReduce(collection, callback, acc) {
        if (acc === undefined) {
          const values = Array.isArray(collection) ? collection : Object.values(collection);
          acc = values[0];
          for (let i = 1; i < values.length; i++) {
            acc = callback(acc, values[i], collection);
          }
        } else {
          const entries = Array.isArray(collection) ? collection.entries() : Object.entries(collection);
          for (let [key, value] of entries) {
            acc = callback(acc, value, collection);
          }
        }
        return acc;
      }
      function myFind(collection, predicate) {
        let values = [];
        if (typeof collection === 'object') {
          values = Object.values(collection);
        } else if (Array.isArray(collection)) {
          values = collection;
        }
        for (let value of values) {
          if (predicate(value)) {
            return value;
          }
        }
        return undefined;
      }

      function myFilter(collection, predicate) {
        let values = [];
        if (typeof collection === 'object') {
          values = Object.values(collection);
        } else if (Array.isArray(collection)) {
          values = collection;
        }
        let result = [];
        for (let i = 0; i < values.length; i++) {
          if (predicate(values[i])) {
            result.push(values[i]);
          }
        }
        return result;
      }
      function mySize(collection) {
        let values = [];
        if (typeof collection === 'object') {
          values = Object.values(collection);
        } else if (Array.isArray(collection)) {
          values = collection;
        }
        return values.length;
      }
      function myFirst(array, n) {
        if (n) {
          return array.slice(0, n);
        } else {
          return array[0];
        }
      }
      function myLast(array, n) {
        if (n) {
          return array.slice(-n);
        } else {
          return array[array.length - 1]
        }
      }
      function myKeys(object) {
      const keys = Object.keys(object)
      return keys;
      }
      function myValues(object){
      const values = Object.values(object)
      return values;
      }