// Copyright 2022 the Deno authors. All rights reserved. MIT license.

type IconProps = {
  size?: number;
  className?: string;
};

export default function Icon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8619 2.19526C11.1223 1.93491 11.5444 1.93491 11.8047 2.19526L13.8047 4.19526C14.0651 4.45561 14.0651 4.87772 13.8047 5.13807L7.80474 11.1381C7.67971 11.2631 7.51014 11.3333 7.33333 11.3333H5.33333C4.96514 11.3333 4.66667 11.0349 4.66667 10.6667V8.66667C4.66667 8.48986 4.7369 8.32029 4.86193 8.19526L10.8619 2.19526ZM6 8.94281V10H7.05719L12.3905 4.66667L11.3333 3.60948L6 8.94281ZM2 4.66667C2 3.93029 2.59695 3.33333 3.33333 3.33333H6.66667C7.03486 3.33333 7.33333 3.63181 7.33333 4C7.33333 4.36819 7.03486 4.66667 6.66667 4.66667H3.33333V12.6667H11.3333V9.33333C11.3333 8.96514 11.6318 8.66667 12 8.66667C12.3682 8.66667 12.6667 8.96514 12.6667 9.33333V12.6667C12.6667 13.403 12.0697 14 11.3333 14H3.33333C2.59695 14 2 13.403 2 12.6667V4.66667Z"
        fill="currentColor"
      />
    </svg>
  );
}
