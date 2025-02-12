/**
 * Returns all but the first `n` elements of the given listOrString, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * @func
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of listOrString without the first `n` elements
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
export function drop(n, listOrString){
  if (arguments.length === 1) return _list => drop(n, _list)

  return listOrString.slice(n > 0 ? n : 0)
}
