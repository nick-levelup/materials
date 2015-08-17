/*
Common Words

For communication in in combat we often use false commands to distract the enemy.
Our troops need to have an algorithm to determine which are the real commands which should be followed.
For this they have been given the secret method to tell the real from the fake.

You are given two string with words separated by commas. Try to find what is common between these strings.
The words are not repeated in the same string.

Your function should find all of the words that appear in both strings.
The result must be represented as a string of words separated by commas in alphabetical order.

Input: Two arguments as strings.

Output: The common words as a string.

Example:
*/

commonWords("hello,world", "hello,earth") == "hello"
commonWords("one,two,three", "four,five,six") == ""
commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
commonWords("hello,world", "hello,earth") // "hello"
commonWords("one,two,three", "four,five,six") // ""

/*
Precondition:

Each string contains no more than 10 words.

All words separated by commas.

All words consist of lowercase latin letters.

How it is used:

This mission simply teaches you how to work with strings and sets, knowledge which can be useful in linguistic analysis.
*/




/*
Bird Language

Robots keep little mechbirds as pets. Recently, they were trying to teach it how to speak basic language.
Today the bird spoke its first word: "hieeelalaooo". This sounds a lot like "hello", but with too many vowels.
With the information they discovered, we should help them to make a translation module.

The bird converts words by two rules:

after each consonant letter the bird appends a random vowel letter (l ⇒ la or le);
after each vowel letter the bird appends two of the same letter (a ⇒ aaa);
Vowels letters == "aeiouy".

You are given an ornithological phrase as several words which are separated by white-spaces
(each pair of words by one whitespace). The bird does not know how to punctuate its phrases and only speaks words as letters.
All words are given in lowercase. You should translate this phrase from the bird language to something more understandable.

Input: A bird phrase as a string.

Output: The translation as a string.

Example:

translate("hieeelalaooo") == "hello"
translate("hoooowe yyyooouuu duoooiiine") == "how you doin"
translate("aaa bo cy da eee fe") == "a b c d e f"
translate("sooooso aaaaaaaaa") == "sos aaa"
Precondition:

A phrase satisfies regexp "\A([a-z]+\ ?)+(<!\ )\Z".

A phrase always has the translation.

How it is used:

This a similar cipher to those used by children when they invent their own "bird" language. Now you will be ready to crack the code.
*/