import { useEffect, useState } from 'react'

interface UseTypedTextOptions {
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function useTypedText(words: string[], options: UseTypedTextOptions = {}) {
  const { typeSpeed = 70, deleteSpeed = 40, pauseDuration = 1600 } = options
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const currentWord = words[wordIndex % words.length]

    if (!deleting && text === currentWord) {
      const pause = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(pause)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration])

  return text
}
