import React, { memo } from 'react';

const UserRoleInner = () => {
    return (
        <svg viewBox="0 0 20 19">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 10.0537C10.2546 10.0537 12.4626 7.81705 12.4626 5.02684C12.4626 2.23663 10.2546 0 7.5 0C4.74543 0 2.53737 2.23663 2.53737 5.02684C2.53737 7.81705 4.74543 10.0537 7.5 10.0537ZM7.5 12.5152C3.45422 12.5152 0 13.1621 0 15.7464C0 18.3298 3.4332 19 7.5 19C11.5448 19 15 18.3531 15 15.7687C15 13.1844 11.5668 12.5152 7.5 12.5152ZM17.8979 7.08786H19.101C19.5962 7.08786 20 7.49731 20 7.99948C20 8.50165 19.5962 8.9111 19.101 8.9111H17.8979V10.0884C17.8979 10.5906 17.4952 11 16.999 11C16.5038 11 16.1 10.5906 16.1 10.0884V8.9111H14.899C14.4027 8.9111 14 8.50165 14 7.99948C14 7.49731 14.4027 7.08786 14.899 7.08786H16.1V5.91162C16.1 5.40945 16.5038 5 16.999 5C17.4952 5 17.8979 5.40945 17.8979 5.91162V7.08786Z"
            />
        </svg>
    );
};

export const UserRole = memo(UserRoleInner);