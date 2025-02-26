/* eslint-disable react-hooks/exhaustive-deps */
import React, { HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import { DEFAULT_TAB_TYPE } from './Tab';
import { useTabsContext } from './TabContext';

interface TabListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {}

const TabList: React.FC<PropsWithChildren<TabListProps>> = ({ children, ...restProps }) => {
  const { activeTab, onSelectTab } = useTabsContext();

  useEffect(() => {
    if (activeTab) return;

    const [firstTab] = React.Children.toArray(children) as React.ReactElement[];

    if (!React.isValidElement(firstTab) || (firstTab.props as any).__TYPE !== DEFAULT_TAB_TYPE)
      throw new Error('TabList must have only Tab component as a child.');

    onSelectTab((firstTab.props as any).tab);
  }, [children, activeTab]);

  return (
    <div role="tablist" {...restProps}>
      {children}
    </div>
  );
};

export default TabList;
