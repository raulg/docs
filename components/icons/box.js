import { memo } from 'react'

function Box() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.8899 1.44991L20.8899 5.44991C21.2231 5.61548 21.5036 5.87073 21.6996 6.18695C21.8957 6.50317 21.9997 6.86782 21.9999 7.23991V16.7699C21.9997 17.142 21.8957 17.5066 21.6996 17.8229C21.5036 18.1391 21.2231 18.3943 20.8899 18.5599L12.8899 22.5599C12.6121 22.6989 12.3056 22.7713 11.9949 22.7713C11.6842 22.7713 11.3778 22.6989 11.0999 22.5599L3.09993 18.5599C2.76706 18.3922 2.48768 18.1348 2.29331 17.8167C2.09895 17.4987 1.99733 17.1326 1.99993 16.7599V7.23991C2.00012 6.86782 2.10411 6.50317 2.30021 6.18695C2.4963 5.87073 2.77671 5.61548 3.10993 5.44991L11.1099 1.44991C11.3865 1.31248 11.6911 1.24097 11.9999 1.24097C12.3087 1.24097 12.6134 1.31248 12.8899 1.44991V1.44991Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.31995 6.15991L11.9999 10.9999L21.6799 6.15991"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22.76V11"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default memo(Box)