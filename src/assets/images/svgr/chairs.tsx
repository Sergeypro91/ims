import React, { memo } from 'react';

const ChairsInner = () => {
    return (
        <svg viewBox="0 0 18 21">
            <rect x="4.7373" y="7.63635" width="8.52632" height="13.3636" rx="2" />
            <path d="M17.6807 4.88745C17.4083 4.5494 17.0044 4.35547 16.5721 4.35547H14.1468C14.1015 3.78745 13.8838 2.87821 13.1171 1.74007C13.2191 1.56733 13.2791 1.36704 13.2791 1.15192C13.2791 0.517145 12.7658 0 12.1358 0C11.5048 0 10.9926 0.517145 10.9926 1.15192C10.9926 1.78669 11.5058 2.30384 12.1358 2.30384C12.1653 2.30384 12.1937 2.30172 12.2221 2.2996C12.8479 3.21838 13.0351 3.9337 13.0855 4.35547H4.9134C4.96388 3.9337 5.1511 3.21944 5.77584 2.30172C5.79477 2.30278 5.8137 2.3049 5.83369 2.3049C6.46369 2.3049 6.97695 1.78775 6.97695 1.15298C6.97695 0.518205 6.46474 0 5.83369 0C5.20263 0 4.69043 0.517145 4.69043 1.15192C4.69043 1.37658 4.75564 1.58641 4.86712 1.76338C4.11301 2.89093 3.89846 3.79063 3.85428 4.35547H1.42788C0.995607 4.35547 0.591733 4.5494 0.319328 4.88745C0.0469227 5.2255 -0.0582529 5.66317 0.0311464 6.08917L0.856775 10.0494C0.994555 10.7117 1.58249 11.1917 2.25351 11.1917H3.64709V8.73213C3.64709 7.56325 4.59156 6.61162 5.75165 6.61162H12.2483C13.4084 6.61162 14.3529 7.56325 14.3529 8.73213V11.1928H15.7465C16.4175 11.1928 17.0054 10.7128 17.1432 10.0504L17.9689 6.09023C18.0583 5.66317 17.9531 5.2255 17.6807 4.88745Z" />
        </svg>
    );
};

export const Chairs = memo(ChairsInner);
