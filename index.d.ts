import { F } from "./_ts-toolbelt/src/index";
declare let R: R.Static;

declare namespace R {
  // INTERFACES_MARKER
  type RambdaTypes = "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "RegExp" | "NaN" | "Function" | "Undefined" | "Async" | "Promise";

  type FilterFunctionArray<T> = (x: T, index: number) => boolean;
  type FilterFunctionObject<T> = (x: T, prop: string, inputObj: Dictionary<T>) => boolean;
  type MapFunctionObject<T, U> = (x: T, prop: string, inputObj: Dictionary<T>) => U;
  type MapFunctionArray<T, U> = (x: T, index: number) => U;

  type SimplePredicate<T> = (x: T) => boolean;

  type CommonKeys<T1, T2> = keyof T1 & keyof T2;

  type Ord = number | string | boolean | Date;

  type Path = string | ReadonlyArray<(number | string)>;

  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
  }

  type Arity1Fn = (a: any) => any;

  type Arity2Fn = (a: any, b: any) => any;

  type Pred = (...a: any[]) => boolean;
  type Predicate<T> = (input: T) => boolean;
  type SafePred<T> = (...a: T[]) => boolean;

  interface Dictionary<T> {
    [index: string]: T;
  }
  type Merge<Primary, Secondary> = { [K in keyof Primary]: Primary[K] } & { [K in Exclude<keyof Secondary, CommonKeys<Primary, Secondary>>]: Secondary[K] };

  // INTERFACES_MARKER_END
  interface Static {
    // METHODS_MARKER

    // METHODS_MARKER_END

    
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;

    /*
			It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.	
		*/	
    adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
    adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

    /*
			It returns `true`, if all members of array `arr` returns `true`, when applied as argument to function `fn`.	
		*/	
    all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    all<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    /*
			It returns `true`, if all functions of `rules` return `true`, when `input` is their argument.	
		*/	
    allPass<T>(predicates: Array<(x: T) => boolean>): (input: T) => boolean;

    /*
			It returns function that always returns `x`.	
		*/	
    always<T>(val: T): () => T;

    /*
			It returns `true`, if at least one member of `arr` returns true, when passed to the `condition` function.	
		*/	
    any<T>(fn: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
    any<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    
    anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;

    
    append<T>(el: T, list: ReadonlyArray<T>): T[];
    append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

    /*
			Makes a shallow clone of `obj`, setting or overriding the property `prop` with
the value `value`. Note that this copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.	
		*/	
    assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
    assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;

    
    assocPath<T, U>(path: Path, val: T, obj: U): U;
    assocPath<T, U>(path: Path, val: T): (obj: U) => U;
    assocPath<T, U>(path: Path): F.Curry<(a: T, b: U) => U>;

    
    and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
    and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;


    /*
			It returns `true`, if both function `firstCondition` and function `secondCondition` return `true`, when `input` is their argument.	
		*/	
    both(pred1: Pred, pred2: Pred): Pred;
    both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
    both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
    both(pred1: Pred): (pred2: Pred) => Pred;

    
    either(pred1: Pred, pred2: Pred): Pred;
    either(pred1: Pred): (pred2: Pred) => Pred;

    
    clone<T>(value: T): T;
    clone<T>(value: ReadonlyArray<T>): T[];

    /*
			It returns `complemented` function that accept `input` as argument.

The return value of `complemented` is the negative boolean value of `fn(input)`.	
		*/	
    complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

    /*
			It performs right-to-left function composition.	
		*/	
    compose<T1>(fn0: () => T1): () => T1;
    compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
    compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
    compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2;
    compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
    compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
    compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

    compose<T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T3;
    compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
    compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
    compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

    compose<T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T4;
    compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
    compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
    compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

    compose<T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T5;
    compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
    compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
    compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

    compose<T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T6;
    compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
    compose<V0, V1, T1, T2, T3, T4, T5, T6>(
      fn5: (x: T5) => T6,
      fn4: (x: T4) => T5,
      fn3: (x: T3) => T4,
      fn2: (x: T2) => T3,
      fn1: (x: T1) => T2,
      fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
    compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn5: (x: T5) => T6,
      fn4: (x: T4) => T5,
      fn3: (x: T3) => T4,
      fn2: (x: T2) => T3,
      fn1: (x: T1) => T2,
      fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;

    /*
			It returns a new string or array, which is the result of merging `x` and `y`.	
		*/	
    concat<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    concat<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    concat(list1: string, list2: string): string;
    concat(list1: string): (list2: string) => string;

    /*
			It returns curried version of `fn`.	
		*/	
    curry<F extends (...args: any) => any>(f: F): F.Curry<F>;

    /*
			It decrements a number.	
		*/	
    dec(n: number): number;

    /*
			It either returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Or it returns the first truthy `inputArguments` instance(from left to right).	
		*/	
    defaultTo<T>(a: T): (...rest: Array<T | null | undefined>) => T;
    defaultTo<T>(a: T, ...rest: Array<T | null | undefined>): T;
    defaultTo<T, U>(a: T | U, ...rest: Array<T | U | null | undefined>): T | U;

    
    difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    /*
			It returns a new object that does not contain a `prop` property.	
		*/	
    dissoc<T>(prop: string, obj: any): T;
    dissoc(prop: string): <U>(obj: any) => U;

    
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    /*
			It returns `arrOrStr` with `howManyToDrop` items dropped from the left.	
		*/	
    drop<T>(n: number, xs: ReadonlyArray<T>): T[];
    drop(n: number, xs: string): string;
    drop<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    /*
			It returns `arrOrStr` with `howManyToDrop` items dropped from the right.	
		*/	
    dropLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    dropLast(n: number, xs: string): string;
    dropLast<T>(n: number): {
      (xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    
    endsWith(a: string, list: string): boolean;
    endsWith(a: string): (list: string) => boolean;
    endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    /*
			It returns equality match between `a` and `b`.

It doesn't handle cyclical data structures.	
		*/	
    equals<T>(a: T, b: T): boolean;
    equals<T>(a: T): (b: T) => boolean;

    
    
    F(): boolean;

    /*
			It filters `x` iterable over boolean returning `filterFn`.





The method works with objects as well.

Note that unlike Ramda's `filter`, here object keys are passed as second argument to `filterFn`.


const result = R.filter((val, prop)=>{
  return prop === 'a' || val === 2
}, {a: 1, b: 2, c: 3})

// => {a: 1, b: 2}	
		*/	
    filter<T>(fn: FilterFunctionArray<T>): (list: T[]) => T[];
    filter<T>(fn: FilterFunctionArray<T>, list: T[]): T[];
    filter<T, U>(fn: FilterFunctionObject<T>): (obj: Dictionary<T>) => Dictionary<T>;
    filter<T>(fn: FilterFunctionObject<T>, obj: Dictionary<T>): Dictionary<T>;

    /*
			It returns `undefined` or the first element of `arr` satisfying `findFn`.	
		*/	
    find<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
    find<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

    /*
			It returns `-1` or the index of the first element of `arr` satisfying `findFn`.	
		*/	
    findIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
    findIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

    
    findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
    findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

    
    findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
    findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

    
    flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

    /*
			It returns function which calls `fn` with exchanged first and second argument.	
		*/	
    flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
    flip<T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult;

    /*
			It applies function `fn` over all members of array `arr` and returns `arr`.	
		*/	
    forEach<T>(fn: (x: T) => void, list: T[]): T[];
    forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
    forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
    forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

    
    fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
    fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

    /*
			It groups array `arr` by provided selector function `fn`.	
		*/	
    groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
    groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

    /*
			- It returns `true` if `obj` has property `prop`.	
		*/	
    has(s: string): <T>(obj: T) => boolean;

    
    groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

    /*
			It returns the first element of `arrOrStr`.	
		*/	
    head<T>(list: Array<T>): T | undefined;
    head(list: string): string;

    
    identical<T>(a: T, b: T): boolean;
    identical<T>(a: T): (b: T) => boolean;

    /*
			It just passes back the supplied arguments.	
		*/	
    identity<T>(a: T): T;

    /*
			It returns function, which expect `input` as argument and returns `finalResult`.

When this function is called, a value `answer` is generated as a result of `condition(input)`.

If `answer` is `true`, then `finalResult` is equal to `ifFn(input)`.
If `answer` is `false`, then `finalResult` is equal to `elseFn(input)`.	
		*/	
    ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
    ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

    /*
			It increments a number.	
		*/	
    inc(n: number): number;

    /*
			If `input` is string, then this method work as native `includes`.
If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.	
		*/	
    includes(s: string, list: ReadonlyArray<string> | string): boolean;
    includes(s: string): (list: ReadonlyArray<string> | string) => boolean;
    includes<T>(target: T, list: ReadonlyArray<T>): boolean;
    includes<T>(target: T): (list: ReadonlyArray<T>) => boolean;

    /*
			It indexes array `arr` as an object with provided selector function `fn`.	
		*/	
    indexBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
    indexBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };

    /*
			It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.	
		*/	
    indexOf<T>(target: T, list: ReadonlyArray<T>): number;
    indexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

    /*
			- It returns all but the last element of `arrOrStr`.	
		*/	
    init<T>(list: ReadonlyArray<T>): T[];
    init(list: string): string;

    
    intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
    intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

    
    
    intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    /*
			It returns `true` is `x` is instance of `xPrototype`.	
		*/	
    is(ctor: any, val: any): boolean;
    is(ctor: any): (val: any) => boolean;

    
    isEmpty<T>(input: T): boolean;

    /*
			It returns `true` is `x` is either `null` or `undefined`.	
		*/	
    isNil(value: any): value is null | undefined;

    
    join(x: string, xs: ReadonlyArray<any>): string;
    join(x: string): (xs: ReadonlyArray<any>) => string;

    
    keys<T extends object>(x: T): Array<keyof T>;
    keys<T>(x: T): string[];

    /*
			- It returns the last element of `arrOrStr`.	
		*/	
    last<T>(list: Array<T>): T | undefined;
    last(list: string): string;

    /*
			It returns the last index of `x` in array `arr`.

`R.equals` is used to determine equality between `x` and members of `arr`.

Value `-1` is returned if no `x` is found in `arr`.	
		*/	
    lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;

    
    length<T>(list: ReadonlyArray<T>): number;

    /*
			It returns the result of looping through iterable `x` with `mapFn`.

The method works with objects as well.

Note that unlike Ramda's `map`, here array keys are passed as second argument to `mapFn`.	
		*/	
    map<T, U>(fn: MapFunctionObject<T, U>, obj: Dictionary<T>): Dictionary<U>;
    map<T, U, S>(fn: MapFunctionObject<T, U>): (obj: Dictionary<T>) => Dictionary<U>;
    map<T, U>(fn: MapFunctionArray<T, U>, list: T[]): U[];
    map<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => U[];
    map<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
    map<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];

    
    match(regexp: RegExp, str: string): any[];
    match(regexp: RegExp): (str: string) => any[];

    
    max<T extends Ord>(a: T, b: T): T;
    max<T extends Ord>(a: T): (b: T) => T;

    
    maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    maxBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    
    mean(list: ReadonlyArray<number>): number;

    
    median(list: ReadonlyArray<number>): number;

    /*
			It returns result of `Object.assign({}, a, b)`.	
		*/	
    merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
    merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

    
    min<T extends Ord>(a: T, b: T): T;
    min<T extends Ord>(a: T): (b: T) => T;

    
    minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    minBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    /*
			It returns the remainder of operation `a/b`.	
		*/	
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;

    /*
			It returns the result of operation `a*b`.	
		*/	
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

    
    negate(a: number): number;

    
    none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    /*
			It returns inverted boolean version of input `x`.	
		*/	
    not(value: any): boolean;

    
    nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
    nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

    /*
			It returns a partial copy of an `obj` with omitting `propsToOmit`	
		*/	
    omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
    omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
    omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;

    
    partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;

    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;

    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;

    partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

    
    partialCurry<Input, PartialInput, Output>(
      fn: (input: Input) => Output,
      partialInput: PartialInput,
    ): (
        input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>,
      ) => Output;


    /*
			If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.	
		*/	
    path<Input, T>(path: Path, obj: Input): T | undefined;
    path<T>(path: Path, obj: any): T | undefined;
    path<T>(path: Path): (obj: any) => T | undefined;
    path<Input, T>(path: Path): (obj: Input) => T | undefined;

    /*
			`pathFound` is the result of calling `R.path(pathToSearch, obj)`.

If `pathFound` is `undefined`, `null` or `NaN`, then `defaultValue` will be returned.

`pathFound` is returned in any other case.	
		*/	
    pathOr<T>(defaultValue: T, path: Path, obj: any): any;
    pathOr<T>(defaultValue: T, path: Path): (obj: any) => any;
    pathOr<T>(defaultValue: T): F.Curry<(a: Path, b: any) => any>;

    /*
			It returns a partial copy of an `obj` containing only `propsToPick` properties.	
		*/	
    pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
    pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
    pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;

    
    pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
    pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

    /*
			It performs left-to-right function composition.	
		*/	
    pipe<T1>(fn0: () => T1): () => T1;
    pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
    pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
    pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

    pipe<T1, T2>(fn0: () => T1, fn1: (x: T1) => T2): () => T2;
    pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
    pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
    pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

    pipe<T1, T2, T3>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): () => T3;
    pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
    pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
    pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

    pipe<T1, T2, T3, T4>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): () => T4;
    pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
    pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
    pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

    pipe<T1, T2, T3, T4, T5>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): () => T5;
    pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
    pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

    pipe<T1, T2, T3, T4, T5, T6>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): () => T6;
    pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

    pipe<T1, T2, T3, T4, T5, T6, T7>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn: (x: T6) => T7): () => T7;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn: (x: T6) => T7): (x: V0) => T7;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn: (x: T7) => T8): () => T8;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn: (x: T7) => T8): (x: V0) => T8;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): () => T9;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0) => T9;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

    pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: () => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): () => T10;
    pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0) => T10;
    pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
    pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      fn0: (x0: V0, x1: V1, x2: V2) => T1,
      fn1: (x: T1) => T2,
      fn2: (x: T2) => T3,
      fn3: (x: T3) => T4,
      fn4: (x: T4) => T5,
      fn5: (x: T5) => T6,
      fn6: (x: T6) => T7,
      fn7: (x: T7) => T8,
      fn8: (x: T8) => T9,
      fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;

    /*
			It returns list of the values of `property` taken from the objects in array of objects `arr`.	
		*/	
    pluck<T>(p: number, list: ReadonlyArray<T>): T;
    pluck<K extends keyof T, T>(p: K, list: ReadonlyArray<T>): Array<T[K]>;
    pluck(p: number): <T>(list: ReadonlyArray<T>) => T;
    pluck<P extends string>(p: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];

    /*
			It adds `x` to the start of the array `arr`.	
		*/	
    prepend<T>(el: T, list: ReadonlyArray<T>): T[];
    prepend<T>(el: T): (list: ReadonlyArray<T>) => T[];

    
    product(list: ReadonlyArray<number>): number;

    /*
			It returns `undefined` or the value of property `propToFind` in `obj`	
		*/	
    prop<P extends keyof T, T>(p: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

    /*
			It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.	
		*/	
    propEq<T>(name: string | number, val: T, obj: any): boolean;
    propEq<T>(name: string | number, val: T): (obj: any) => boolean;
    propEq(name: string | number): {
      <T>(val: T, obj: any): boolean;
      <T>(val: T): (obj: any) => boolean;
    };

    
    propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
    propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

    
    propOr<T, U, V>(val: T, p: string, obj: U): V;
    propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
    propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

    /*
			It returns a array of numbers from `start`(inclusive) to `end`(exclusive).	
		*/	
    range(from: number, to: number): number[];
    range(from: number): (to: number) => number[];

    
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

    /*
			It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `fn`.	
		*/	
    reject<T>(fn: FilterFunctionArray<T>): (list: T[]) => T[];
    reject<T>(fn: FilterFunctionArray<T>, list: T[]): T[];

    
    repeat<T>(a: T, n: number): T[];
    repeat<T>(a: T): (n: number) => T[];

    /*
			It replaces `strOrRegex` found in `str` with `replacer`.	
		*/	
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string), str: string): string;
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string)): (str: string) => string;
    replace(pattern: RegExp | string): (replacement: string | ((match: string, ...args: any[]) => string)) => (str: string) => string;

    
    reverse<T>(list: ReadonlyArray<T>): T[];
    reverse(str: string): string;

    
    slice(a: number, b: number, list: string): string;
    slice<T>(a: number, b: number, list: T[]): T[];
    slice(a: number, b: number): {
        (list: string): string;
        <T>(list: T[]): T[];
    };
    slice(a: number): {
        (b: number, list: string): string;
        <T>(b: number, list: T[]): T[];
    };

    /*
			It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return a number type.	
		*/	
    sort<T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    sort<T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

    /*
			It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return value for comparison.	
		*/	
    sortBy<T>(fn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
    sortBy(fn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];

    
    split(sep: string | RegExp): (str: string) => string[];
    split(sep: string | RegExp, str: string): string[];

    /*
			- It splits `arrOrStr` into slices of `sliceLength`.	
		*/	
    splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
    splitEvery(a: number, list: string): string[];
    splitEvery(a: number): {
      (list: string): string[];
      <T>(list: ReadonlyArray<T>): T[][];
    };

    
    startsWith(a: string, list: string): boolean;
    startsWith(a: string): (list: string) => boolean;
    startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    
    sum(list: ReadonlyArray<number>): number;

    
    symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

    
    T(): boolean;

    /*
			- It returns all but the first element of `arrOrStr`	
		*/	
    tail<T>(list: ReadonlyArray<T>): T[];
    tail(list: string): string;

    /*
			- It returns the first `num` elements of `arrOrStr`.	
		*/	
    take<T>(n: number, xs: ReadonlyArray<T>): T[];
    take(n: number, xs: string): string;
    take<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    /*
			- It returns the last `num` elements of `arrOrStr`.	
		*/	
    takeLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    takeLast(n: number, xs: string): string;
    takeLast(n: number): {
      <T>(xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    /*
			- It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.	
		*/	
    tap<T>(fn: (a: T) => any, value: T): T;
    tap<T>(fn: (a: T) => any): (value: T) => T;

    /*
			- Determines whether `str` matches `regExpression`	
		*/	
    test(regexp: RegExp): (str: string) => boolean;
    test(regexp: RegExp, str: string): boolean;

    /*
			It returns the result of applying function `fn` over members of range array.
The range array includes numbers between `0` and `n`(exclusive).	
		*/	
    times<T>(fn: (i: number) => T, n: number): T[];
    times<T>(fn: (i: number) => T): (n: number) => T[];

    
    transpose<T>(list: T[][]): T[][];

    
    toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

    
    toLower(str: string): string;

    
    toString<T>(val: T): string;

    
    toUpper(str: string): string;

    
    trim(str: string): string;

    
    type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

    /*
			It returns a new array containing only one copy of each element in `arr`.	
		*/	
    uniq<T>(list: ReadonlyArray<T>): T[];

    /*
			It returns a new array containing only one copy of each element in `arr` according to boolean returning function `fn`.	
		*/	
    uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
    uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];
    
    /*
			It returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`.	
		*/	
    update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
    update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

    /*
			It returns array with of all values in `obj`.	
		*/	
    values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

    /*
			It will return a new array based on `b` array.

This array contains all members of `b` array, that doesn't exist in `a` array.

Method `R.equals` is used to determine the existance of `b` members in `a` array.	
		*/	
    without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    /*
			It will return a new array containing tuples of equally positions items from both lists. The returned list will be truncated to match the length of the shortest supplied list.	
		*/	
    zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
    zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

    /*
			It will return a new object with keys of `a` array and values of `b` array.	
		*/	
    zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
    zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
    
  }
}

export = R;
export as namespace R;
