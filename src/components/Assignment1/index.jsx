import CardSection from "./CardSection"


const Assignment1 = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl mb-2">Array</h1>
        <p> An array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index.</p>
      </div>
      <div>
        <h1 className="text-3xl mb-4">Array Methods</h1>
        <div className="mb-4 flex flex-col gap-6">
          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Creation & Conversion</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"Array.from()"} definition={"Creates a new Array from an array-like or iterable object (e.g. string, Set, Map, NodeList). Accepts an optional mapping function as the second argument."} />
              <CardSection method={"Array.of()"} definition={"Creates a new Array from the given arguments. Unlike new Array(n), Array.of(7) creates [7], not an empty array of length 7."} />
              <CardSection method={"Array.isArray()"} definition={"Checks whether the passed value is an Array. More reliable than typeof or instanceof for cross-frame checks."} />
              <CardSection method={"new Array()"} definition={"Creates an array. A single numeric argument sets the length (sparse/empty array). Multiple arguments become elements."} />
            </div></div>
          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Adding & Removing</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"push()"} definition={"Appends one or more elements to the end of an array. Returns the new length. Modifies the array in-place."} />
              <CardSection method={"pop()"} definition={"Removes and returns the last element. If the array is empty, returns undefined."} />
              <CardSection method={"shift()"} definition={"Removes and returns the first element, shifting all remaining elements down by one index. O(n) performance."} />
              <CardSection method={"unshift()"} definition={"Inserts one or more elements at the beginning, shifting all existing elements up. Returns the new length."} />
              <CardSection method={"splice()"} definition={"The Swiss-army knife: removes, replaces, or inserts elements at any index. Arguments: start, deleteCount, items to insert."} />
            </div>
          </div>

          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Searching & Finding</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"indexOf()()"} definition={"Returns the first index at which the value is found, using strict equality (===). Returns -1 if not found. Cannot detect NaN."} />
              <CardSection method={"lastIndexOf()"} definition={"Returns the last index at which the value is found (searches from end to start). Returns -1 if not found."} />
              <CardSection method={"includes()"} definition={"Returns true if the array contains the value. Uses SameValueZero comparison — correctly handles NaN (unlike indexOf)."} />
              <CardSection method={"find()"} definition={"Returns the first element for which the callback returns true. Returns undefined if no element passes. Stops at first match."} />

            </div>
          </div>

          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Iteration & Transformation</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"forEach()"} definition={"Returns the first index at which the value is found, using strict equality (===). Returns -1 if not found. Cannot detect NaN."} />
              <CardSection method={"map()"} definition={"Returns the last index at which the value is found (searches from end to start). Returns -1 if not found."} />
              <CardSection method={"filter()"} definition={"Returns true if the array contains the value. Uses SameValueZero comparison — correctly handles NaN (unlike indexOf)."} />
              <CardSection method={"reduce()"} definition={"Returns the first element for which the callback returns true. Returns undefined if no element passes. Stops at first match."} />
              <CardSection method={"flatMap()"} definition={"Maps each element and flattens the result by exactly one level. More efficient than calling .map().flat(1). Cannot flatten deeper than 1 level."} />

            </div>
          </div>

          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Sorting & Ordering</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"sort()"} definition={"Sorts the array in-place. Default sort converts to strings and compares UTF-16 code units — always provide a comparator for numbers! Unstable in older engines."} />
              <CardSection method={"toSorted()"} definition={"Returns a sorted copy of the array — non-mutating version of sort(). The original array is unchanged."} />
              <CardSection method={"reverse()"} definition={"Reverses the array in-place. The first element becomes the last and vice versa. Modifies original."} />
              <CardSection method={"toReversed()"} definition={"Returns a reversed copy of the array — non-mutating version of reverse(). Original array is unchanged."} />


            </div>
          </div>

          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Combining & Slicing</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"concat()"} definition={"Merges two or more arrays (or values) into a new array. Does not recurse into nested arrays. Shallow copy."} />
              <CardSection method={"slice()"} definition={"Extracts a portion of the array from start to end (end not included). Negative indices count from the end. Does not modify original."} />
              <CardSection method={"flat()"} definition={"Creates a new array by flattening nested arrays to the given depth (default 1). Use Infinity to fully flatten any depth."} />
              <CardSection method={"join()"} definition={"Concatenates all array elements into a single string with a given separator (default: comma). Nested arrays are recursively converted to strings."} />


            </div>
          </div>

          <div className="">

            <h2 className="text-2xl  text-cyan-500 ">Testing & Condition Checks</h2>
            <hr className="text-amber-800 mb-4"></hr>
            <div className="flex flex-col gap-3">
              <CardSection method={"every()"} definition={"Returns true only if ALL elements pass the callback test. Short-circuits (stops) at the first false — efficient for early exit."} />
              <CardSection method={"some()"} definition={"Returns true if AT LEAST ONE element passes the callback. Short-circuits at the first true — efficient for early exit."} />



            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Assignment1