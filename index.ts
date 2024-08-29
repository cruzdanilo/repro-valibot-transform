import { array, nullish, object, parse, pipe, string, transform } from "valibot";

function f({ a }: { a: string[] }) {
  console.log(a);
}

const Schema = object({ a: pipe(nullish(array(string())), transform((x) => x ?? ["default"])) });


const output = parse(Schema, { a: null });

f(output);
