import React from 'react';
import './RestrictedList.scss';

interface RestrictedListType {
  children: (item: any) => any,
  amount: number,
  list: any[],
  listClasses: string,
}

const RestrictedList: React.FC<RestrictedListType> = ({
  children: renderItem,
  amount,
  list,
  listClasses
}) => {

  const restrictedList = list.slice(0, amount).map((item: any) => renderItem(item));

  return (
    <div className={listClasses}>
      {
        restrictedList
      }
    </div>
  )
}

export default RestrictedList;
