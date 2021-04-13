### About

nixdash searches for all instances of lodash throughout a project and replaces them with their native counterparts


### Rules

---
| lodash | native |
| ---- | ------ |
| _.get(a, b) | a?.b |
| _.find( | .find( |
| _.filter( | .filter( |
| _.last( | *N/A* |
| _.each( | .forEach |
| _.map( | .map |
| _.set( | = sign |
| _.isString( | |
| _.sortBy( | |
| _.keys( | Object.keys |
| _.isEqual( | |
| _.findIndex( | .findIndex |
| _.orderBy( | |
| _.includes( | | 
| _.compact(| |
| _.range(| |
| _.isFunction(| |
| _.first(| |
| _.remove(| |
| _.omit(| |
| _.maxBy(| |
| _.cloneDeep(| |
| _.uniqBy(| |
| _.sum(| |
| _.reduce(| |
| _.mergeWith(| |
