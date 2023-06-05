/**
 * Mutating method	    Non-mutating alternative
 * 
    copyWithin()	    No one-method alternative
    fill()	            No one-method alternative
    pop()	            slice(0, -1)
    push(v1, v2)	    concat([v1, v2])
    reverse()	        toReversed()
    shift()	            slice(1)
    sort()	            toSorted()
    splice()	        toSpliced()
    unshift(v1, v2)	    toSpliced(0, 0, v1, v2)
 */