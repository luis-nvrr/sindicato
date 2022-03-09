type RunLengthEncodedString = [string, number][];

// given a string, return each repeating character and it's run count, for example:
// "aaaabbbbccc" => [["a", 4], ["b", 3], ["c", 3]]
//
// see https://en.wikipedia.org/wiki/Run-length_encoding
//
// O(2n)
export function rle(plain: String): RunLengthEncodedString {
  let charactersCount:Map<string, number> = countCharacters(plain) 

  let result:RunLengthEncodedString = []
  charactersCount.forEach((count:number, character:string) => result.push([character, count]))

  return result
}

function countCharacters(plain: String): Map<string, number> {
  let count = new Map<string, number>()
  plain.split("").forEach((character:string) => {
    let currentCount = count.get(character) || 0
    count.set(character, currentCount+1)
  });

  return count
}