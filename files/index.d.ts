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

  type Path = ReadonlyArray<(number | string)>;

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

    // SINGLE_MARKER
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;

    // SINGLE_MARKER
    adjust<T>(index: number, fn: (a: T) => T, list: ReadonlyArray<T>): T[];
    adjust<T>(index: number, fn: (a: T) => T): (list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    all<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    all<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    allPass<T>(predicates: Array<(x: T) => boolean>): (input: T) => boolean;

    // SINGLE_MARKER
    always<T>(val: T): () => T;

    // SINGLE_MARKER
    any<T>(fn: (x: T, i: number) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): boolean;
    any<T>(fn: (x: T, i: number) => boolean): (list: ReadonlyArray<T>) => boolean;
    any<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    anyPass<T>(preds: ReadonlyArray<SafePred<T>>): SafePred<T>;

    // SINGLE_MARKER
    append<T>(el: T, list: ReadonlyArray<T>): T[];
    append<T>(el: T): <T>(list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
    assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;

    // SINGLE_MARKER
    assocPath<T, U>(path: Path, val: T, obj: U): U;
    assocPath<T, U>(path: Path, val: T): (obj: U) => U;
    assocPath<T, U>(path: Path): F.Curry<(a: T, b: U) => U>;

    // SINGLE_MARKER
    and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
    and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;


    // SINGLE_MARKER
    both(pred1: Pred, pred2: Pred): Pred;
    both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
    both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
    both(pred1: Pred): (pred2: Pred) => Pred;

    // SINGLE_MARKER
    either(pred1: Pred, pred2: Pred): Pred;
    either(pred1: Pred): (pred2: Pred) => Pred;

    // SINGLE_MARKER
    clone<T>(value: T): T;
    clone<T>(value: ReadonlyArray<T>): T[];

    // SINGLE_MARKER
    complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean;

    // SINGLE_MARKER
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

    // SINGLE_MARKER
    concat<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    concat<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    concat(list1: string, list2: string): string;
    concat(list1: string): (list2: string) => string;

    // SINGLE_MARKER
    curry<F extends (...args: any) => any>(f: F): F.Curry<F>;

    // SINGLE_MARKER
    dec(n: number): number;

    // SINGLE_MARKER
    defaultTo<T>(a: T): (...rest: Array<T | null | undefined>) => T;
    defaultTo<T>(a: T, ...rest: Array<T | null | undefined>): T;
    defaultTo<T, U>(a: T | U, ...rest: Array<T | U | null | undefined>): T | U;

    // SINGLE_MARKER
    difference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    difference<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    dissoc<T>(prop: string, obj: any): T;
    dissoc(prop: string): <U>(obj: any) => U;

    // SINGLE_MARKER
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    // SINGLE_MARKER
    drop<T>(n: number, xs: ReadonlyArray<T>): T[];
    drop(n: number, xs: string): string;
    drop<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    // SINGLE_MARKER
    dropLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    dropLast(n: number, xs: string): string;
    dropLast<T>(n: number): {
      (xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    // SINGLE_MARKER
    endsWith(a: string, list: string): boolean;
    endsWith(a: string): (list: string) => boolean;
    endsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    endsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    equals<T>(a: T, b: T): boolean;
    equals<T>(a: T): (b: T) => boolean;

    
    // SINGLE_MARKER
    F(): boolean;

    // SINGLE_MARKER
    filter<T>(fn: FilterFunctionArray<T>): (list: T[]) => T[];
    filter<T>(fn: FilterFunctionArray<T>, list: T[]): T[];
    filter<T, U>(fn: FilterFunctionObject<T>): (obj: Dictionary<T>) => Dictionary<T>;
    filter<T>(fn: FilterFunctionObject<T>, obj: Dictionary<T>): Dictionary<T>;

    // SINGLE_MARKER
    find<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
    find<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

    // SINGLE_MARKER
    findIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
    findIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

    // SINGLE_MARKER
    findLast<T>(fn: (a: T) => boolean, list: T[]): T | undefined;
    findLast<T>(fn: (a: T) => boolean): (list: T[]) => T | undefined;

    // SINGLE_MARKER
    findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number;
    findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number;

    // SINGLE_MARKER
    flatten<T>(x: ReadonlyArray<T> | ReadonlyArray<T[]> | ReadonlyArray<ReadonlyArray<T>>): T[];

    // SINGLE_MARKER
    flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
    flip<T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (arg1: U, arg0?: T, ...args: any[]) => TResult;

    // SINGLE_MARKER
    forEach<T>(fn: (x: T) => void, list: T[]): T[];
    forEach<T>(fn: (x: T) => void): (list: T[]) => T[];
    forEach<T>(fn: (x: T) => void, list: ReadonlyArray<T>): ReadonlyArray<T>;
    forEach<T>(fn: (x: T) => void): (list: ReadonlyArray<T>) => ReadonlyArray<T>;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void, obj: { [key: string]: T }): void;
    forEach<T>(fn: (value: T, key: string, obj: { [key: string]: T }) => void): (obj: { [key: string]: T }) => void;

    // SINGLE_MARKER
    fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
    fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

    // SINGLE_MARKER
    groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] };
    groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] };

    // SINGLE_MARKER
    has(s: string): <T>(obj: T) => boolean;

    // SINGLE_MARKER
    groupWith<T>(fn: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[][];
    groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

    // SINGLE_MARKER
    head<T>(list: Array<T>): T | undefined;
    head(list: string): string;

    // SINGLE_MARKER
    identical<T>(a: T, b: T): boolean;
    identical<T>(a: T): (b: T) => boolean;

    // SINGLE_MARKER
    identity<T>(a: T): T;

    // SINGLE_MARKER
    ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
    ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

    // SINGLE_MARKER
    inc(n: number): number;

    // SINGLE_MARKER
    includes(s: string, list: ReadonlyArray<string> | string): boolean;
    includes(s: string): (list: ReadonlyArray<string> | string) => boolean;
    includes<T>(target: T, list: ReadonlyArray<T>): boolean;
    includes<T>(target: T): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    indexBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
    indexBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };

    // SINGLE_MARKER
    indexOf<T>(target: T, list: ReadonlyArray<T>): number;
    indexOf<T>(target: T): (list: ReadonlyArray<T>) => number;

    // SINGLE_MARKER
    init<T>(list: ReadonlyArray<T>): T[];
    init(list: string): string;

    // SINGLE_MARKER
    intersperse<T>(separator: T, list: ReadonlyArray<T>): T[];
    intersperse<T>(separator: T): (list: ReadonlyArray<T>) => T[];

    
    // SINGLE_MARKER
    intersection<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    intersection<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    is(ctor: any, val: any): boolean;
    is(ctor: any): (val: any) => boolean;

    // SINGLE_MARKER
    isEmpty<T>(input: T): boolean;

    // SINGLE_MARKER
    isNil(value: any): value is null | undefined;

    // SINGLE_MARKER
    join(x: string, xs: ReadonlyArray<any>): string;
    join(x: string): (xs: ReadonlyArray<any>) => string;

    // SINGLE_MARKER
    keys<T extends object>(x: T): Array<keyof T>;
    keys<T>(x: T): string[];

    // SINGLE_MARKER
    last<T>(list: Array<T>): T | undefined;
    last(list: string): string;

    // SINGLE_MARKER
    lastIndexOf<T>(target: T, list: ReadonlyArray<T>): number;

    // SINGLE_MARKER
    length<T>(list: ReadonlyArray<T>): number;

    // SINGLE_MARKER
    map<T, U>(fn: MapFunctionObject<T, U>, obj: Dictionary<T>): Dictionary<U>;
    map<T, U, S>(fn: MapFunctionObject<T, U>): (obj: Dictionary<T>) => Dictionary<U>;
    map<T, U>(fn: MapFunctionArray<T, U>, list: T[]): U[];
    map<T, U>(fn: MapFunctionArray<T, U>): (list: T[]) => U[];
    map<T>(fn: MapFunctionArray<T, T>): (list: T[]) => T[];
    map<T>(fn: MapFunctionArray<T, T>, list: ReadonlyArray<T>): T[];

    // SINGLE_MARKER
    match(regexp: RegExp, str: string): any[];
    match(regexp: RegExp): (str: string) => any[];

    // SINGLE_MARKER
    max<T extends Ord>(a: T, b: T): T;
    max<T extends Ord>(a: T): (b: T) => T;

    // SINGLE_MARKER
    maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    maxBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    // SINGLE_MARKER
    mean(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    median(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    merge<T1, T2>(a: T1, b: T2): Merge<T2, T1>;
    merge<T1>(a: T1): <T2>(b: T2) => Merge<T2, T1>;

    // SINGLE_MARKER
    min<T extends Ord>(a: T, b: T): T;
    min<T extends Ord>(a: T): (b: T) => T;

    // SINGLE_MARKER
    minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
    minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
    minBy<T>(keyFn: (a: T) => Ord): F.Curry<(a: T, b: T) => T>;

    // SINGLE_MARKER
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;

    // SINGLE_MARKER
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

    // SINGLE_MARKER
    negate(a: number): number;

    // SINGLE_MARKER
    none<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    none<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    not(value: any): boolean;

    // SINGLE_MARKER
    nth<T>(n: number, list: ReadonlyArray<T>): T | undefined;
    nth(n: number): <T>(list: ReadonlyArray<T>) => T | undefined;

    // SINGLE_MARKER
    omit<T>(propsToOmit: string | string[], obj: Dictionary<T>): Dictionary<T>;
    omit<T>(propsToOmit: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    omit<T, U>(propsToOmit: string | string[], obj: Dictionary<T>): U;
    omit<T, U>(propsToOmit: string | string[]): (obj: Dictionary<T>) => U;

    // SINGLE_MARKER
    partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, x0: V0): (x1: V1) => T;

    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0, x1: V1): (x2: V2) => T;
    partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, x0: V0): (x1: V1, x2: V2) => T;

    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1, x2: V2): (x2: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0, x1: V1): (x2: V2, x3: V3) => T;
    partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, x0: V0): (x1: V1, x2: V2, x3: V3) => T;

    partial<T>(fn: (...a: any[]) => T, ...args: any[]): (...a: any[]) => T;

    // SINGLE_MARKER
    partialCurry<Input, PartialInput, Output>(
      fn: (input: Input) => Output,
      partialInput: PartialInput,
    ): (
        input: Pick<Input, Exclude<keyof Input, keyof PartialInput>>,
      ) => Output;


    // SINGLE_MARKER
    path<Input, T>(path: string | string[], obj: Input): T | undefined;
    path<T>(path: string | string[], obj: any): T | undefined;
    path<T>(path: string | string[]): (obj: any) => T | undefined;
    path<Input, T>(path: string | string[]): (obj: Input) => T | undefined;

    // SINGLE_MARKER
    pathOr<T>(defaultValue: T, path: Path, obj: any): any;
    pathOr<T>(defaultValue: T, path: Path): (obj: any) => any;
    pathOr<T>(defaultValue: T): F.Curry<(a: Path, b: any) => any>;

    // SINGLE_MARKER
    pick<T>(propsToPick: string | string[], obj: Dictionary<T>): Dictionary<T>;
    pick<T>(propsToPick: string | string[]): (obj: Dictionary<T>) => Dictionary<T>;
    pick<T, U>(propsToPick: string | string[], obj: Dictionary<T>): U;
    pick<T, U>(propsToPick: string | string[]): (obj: Dictionary<T>) => U;

    // SINGLE_MARKER
    pickAll<T, U>(names: ReadonlyArray<string>, obj: T): U;
    pickAll(names: ReadonlyArray<string>): <T, U>(obj: T) => U;

    // SINGLE_MARKER
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

    // SINGLE_MARKER
    pluck<T>(p: number, list: ReadonlyArray<T>): T;
    pluck<K extends keyof T, T>(p: K, list: ReadonlyArray<T>): Array<T[K]>;
    pluck(p: number): <T>(list: ReadonlyArray<T>) => T;
    pluck<P extends string>(p: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];

    // SINGLE_MARKER
    prepend<T>(el: T, list: ReadonlyArray<T>): T[];
    prepend<T>(el: T): (list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    product(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    prop<P extends keyof T, T>(p: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

    // SINGLE_MARKER
    propEq<T>(name: string | number, val: T, obj: any): boolean;
    propEq<T>(name: string | number, val: T): (obj: any) => boolean;
    propEq(name: string | number): {
      <T>(val: T, obj: any): boolean;
      <T>(val: T): (obj: any) => boolean;
    };

    // SINGLE_MARKER
    propIs<P extends keyof T, T>(type: any, name: P, obj: T): boolean;
    propIs<P extends string>(type: any, name: P): <T>(obj: Record<P, T>) => boolean;

    // SINGLE_MARKER
    propOr<T, U, V>(val: T, p: string, obj: U): V;
    propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
    propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

    // SINGLE_MARKER
    range(from: number, to: number): number[];
    range(from: number): (to: number) => number[];

    // SINGLE_MARKER
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i: number) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult): (acc: TResult, list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T, i?: number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

    // SINGLE_MARKER
    reject<T>(fn: FilterFunctionArray<T>): (list: T[]) => T[];
    reject<T>(fn: FilterFunctionArray<T>, list: T[]): T[];

    // SINGLE_MARKER
    repeat<T>(a: T, n: number): T[];
    repeat<T>(a: T): (n: number) => T[];

    // SINGLE_MARKER
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string), str: string): string;
    replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: any[]) => string)): (str: string) => string;
    replace(pattern: RegExp | string): (replacement: string | ((match: string, ...args: any[]) => string)) => (str: string) => string;

    // SINGLE_MARKER
    reverse<T>(list: ReadonlyArray<T>): T[];
    reverse(str: string): string;

    // SINGLE_MARKER
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

    // SINGLE_MARKER
    sort<T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    sort<T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    sortBy<T>(fn: (a: T) => Ord, list: ReadonlyArray<T>): T[];
    sortBy(fn: (a: any) => Ord): <T>(list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    split(sep: string | RegExp): (str: string) => string[];
    split(sep: string | RegExp, str: string): string[];

    // SINGLE_MARKER
    splitEvery<T>(a: number, list: ReadonlyArray<T>): T[][];
    splitEvery(a: number, list: string): string[];
    splitEvery(a: number): {
      (list: string): string[];
      <T>(list: ReadonlyArray<T>): T[][];
    };

    // SINGLE_MARKER
    startsWith(a: string, list: string): boolean;
    startsWith(a: string): (list: string) => boolean;
    startsWith<T>(a: T | ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    startsWith<T>(a: T | ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    // SINGLE_MARKER
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    // SINGLE_MARKER
    sum(list: ReadonlyArray<number>): number;

    // SINGLE_MARKER
    symmetricDifference<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    symmetricDifference<T>(list: ReadonlyArray<T>): <T>(list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    T(): boolean;

    // SINGLE_MARKER
    tail<T>(list: ReadonlyArray<T>): T[];
    tail(list: string): string;

    // SINGLE_MARKER
    take<T>(n: number, xs: ReadonlyArray<T>): T[];
    take(n: number, xs: string): string;
    take<T>(n: number): {
      (xs: string): string;
      (xs: ReadonlyArray<T>): T[];
    };

    // SINGLE_MARKER
    takeLast<T>(n: number, xs: ReadonlyArray<T>): T[];
    takeLast(n: number, xs: string): string;
    takeLast(n: number): {
      <T>(xs: ReadonlyArray<T>): T[];
      (xs: string): string;
    };

    // SINGLE_MARKER
    tap<T>(fn: (a: T) => any, value: T): T;
    tap<T>(fn: (a: T) => any): (value: T) => T;

    // SINGLE_MARKER
    test(regexp: RegExp): (str: string) => boolean;
    test(regexp: RegExp, str: string): boolean;

    // SINGLE_MARKER
    times<T>(fn: (i: number) => T, n: number): T[];
    times<T>(fn: (i: number) => T): (n: number) => T[];

    // SINGLE_MARKER
    transpose<T>(list: T[][]): T[][];

    // SINGLE_MARKER
    toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

    // SINGLE_MARKER
    toLower(str: string): string;

    // SINGLE_MARKER
    toString<T>(val: T): string;

    // SINGLE_MARKER
    toUpper(str: string): string;

    // SINGLE_MARKER
    trim(str: string): string;

    // SINGLE_MARKER
    type(val: any): "Object" | "Number" | "Boolean" | "String" | "Null" | "Array" | "Function" | "Undefined" | "Async" | "Promise" | "RegExp" | "NaN";

    // SINGLE_MARKER
    uniq<T>(list: ReadonlyArray<T>): T[];

    // SINGLE_MARKER
    uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: ReadonlyArray<T>): T[];
    uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: ReadonlyArray<T>) => T[];
    
    // SINGLE_MARKER
    update<T>(index: number, value: T, list: ReadonlyArray<T>): T[];
    update<T>(index: number, value: T): (list: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

    // SINGLE_MARKER
    without<T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    without<T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];

    // SINGLE_MARKER
    zip<K, V>(list1: ReadonlyArray<K>, list2: ReadonlyArray<V>): Array<KeyValuePair<K, V>>;
    zip<K>(list1: ReadonlyArray<K>): <V>(list2: ReadonlyArray<V>) => Array<KeyValuePair<K, V>>;

    // SINGLE_MARKER
    zipObj<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): { [index: string]: T };
    zipObj(keys: ReadonlyArray<string>): <T>(values: ReadonlyArray<T>) => { [index: string]: T };
    // SINGLE_MARKER
  }
}

export = R;
export as namespace R;
