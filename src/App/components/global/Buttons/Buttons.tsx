import React, { memo } from 'react';
import { Add } from 'assets/images/svgr/add_button';
import { Edit } from 'assets/images/svgr/edit_button';
import { Delete } from 'assets/images/svgr/delete_button';
import { Search } from 'assets/images/svgr/search_button';
import { SearchUser } from 'assets/images/svgr/user-search';
import { Profile } from 'assets/images/svgr/userIcon';
import { Parameters } from 'assets/images/svgr/settingsIcon';
import { Enter } from 'assets/images/svgr/bx-log-in';
import { Exit } from 'assets/images/svgr/bx-log-out';
import { Settings } from 'assets/images/svgr/settings_button';
import { Sort } from 'assets/images/svgr/sort_button';
import { Relolad } from 'assets/images/svgr/reload_button';
import { Print } from 'assets/images/svgr/print_button';
import { Show } from 'assets/images/svgr/bx-show';
import { View } from 'assets/images/svgr/page-view';
import { Close } from 'assets/images/svgr/bx-x';
import { ArrowLeft } from 'assets/images/svgr/arrow-left';
import { ArrowRight } from 'assets/images/svgr/arrow-right';
import { ArrowUp } from 'assets/images/svgr/arrow-up';
import { ArrowDown } from 'assets/images/svgr/arrow-down';
import { Pie } from 'assets/images/svgr/bxs-pie-chart-alt-2';
import { QuickFilter } from 'assets/images/svgr/bx-quick-filter';
import { Filter } from 'assets/images/svgr/filter';
import { ViewHorizontal } from 'assets/images/svgr/page-view_horizontal';
import { ViewVertical } from 'assets/images/svgr/page-view_vertical';
import { Import } from 'assets/images/svgr/import';
import { ImportXls } from 'assets/images/svgr/import_xls-button';
import { ExportXls } from 'assets/images/svgr/export_xls-button';
import { ImportPdf } from 'assets/images/svgr/import_pdf-button';
import { ExportPdf } from 'assets/images/svgr/export_pdf-button';
import { ImportCsv } from 'assets/images/svgr/import_csv-button';
import { ExportCsv } from 'assets/images/svgr/export_csv-button';
import { Events } from 'assets/images/svgr/bx-time-five';
import { Grid } from 'assets/images/svgr/bx-grid-alt';
import { LetIn } from 'assets/images/svgr/bx-chevron-left';
import { Stop } from 'assets/images/svgr/bx-pause';
import { Control } from 'assets/images/svgr/bxs-cctv';
import { LetInMany } from 'assets/images/svgr/bx-chevrons-left';
import { LetInOne } from 'assets/images/svgr/bx-first-page';
import { LetOutOne } from 'assets/images/svgr/bx-last-page';
import { LetOutMany } from 'assets/images/svgr/bx-chevrons-right';
import { Warning } from 'assets/images/svgr/bx-error-circle';
import { Bell } from 'assets/images/svgr/bxs-bell-ring';
import { SecurityCall } from 'assets/images/svgr/security-call';
import { BlockUnLock } from 'assets/images/svgr/block-unlock';
import { BlockLock } from 'assets/images/svgr/block-lock';
import { Gear } from 'assets/images/svgr/bx-cog';
import { Layers } from 'assets/images/svgr/bx-layer';
import { ScanFace } from 'assets/images/svgr/bx-scan';
import { Lock } from 'assets/images/svgr/bx-lock-alt';
import { Pin } from 'assets/images/svgr/pin';
import { Sun } from 'assets/images/svgr/bxs-sun';
import { Moon } from 'assets/images/svgr/bxs-moon';
import { Loader } from 'assets/images/svgr/bx-loader-alt';
import { PrevButton } from 'assets/images/svgr/prev__btn';
import { NextButton } from 'assets/images/svgr/next__btn';
import { Identifiers } from 'assets/images/svgr/identifiers';
import { Organization } from 'assets/images/svgr/organization';
import Star from 'assets/images/svgr/Star';
import Departments from 'assets/images/svgr/Departments';
import { ButtonsType } from './buttonsType';
import './Buttons.scss';

const ButtonsInner = (props: ButtonsType) => {
    return (
        <button
            type="button"
            className={`
                custom-button
                ${props.disable ? 'custom-button--disable' : ''}
                ${props.danger ? 'custom-button--danger' : ''}
                ${props.active ? 'custom-button--active' : ''}
                ${props.typical ? 'custom-button--typical' : ''}
                ${props.size === 'sm' ? 'custom-button--square-sm' : ''}
                ${props.size === 'lg' ? 'custom-button--square-lg' : ''}
                ${props.size === 'm' ? 'custom-button--square-m' : ''}
                ${!props.size ? 'custom-button--custom' : ''}
            `}
            tabIndex={props.disable ? -1 : undefined}
            onClick={props.onPress}>
            <div className="prompt">{props.prompt && <div className="p--sm--normal">{props.prompt}</div>}</div>

            {props.name === 'Add' && <Add />}
            {props.name === 'Edit' && <Edit />}
            {props.name === 'Delete' && <Delete />}
            {props.name === 'Search' && <Search />}
            {props.name === 'SearchUser' && <SearchUser />}
            {props.name === 'Profile' && <Profile />}
            {props.name === 'Parameters' && <Parameters />}
            {props.name === 'Enter' && <Enter />}
            {props.name === 'Exit' && <Exit />}
            {props.name === 'Settings' && <Settings />}
            {props.name === 'Sort' && <Sort />}
            {props.name === 'Relolad' && <Relolad />}
            {props.name === 'Print' && <Print />}
            {props.name === 'Show' && <Show />}
            {props.name === 'View' && <View />}
            {props.name === 'Close' && <Close />}
            {props.name === 'ArrowLeft' && <ArrowLeft />}
            {props.name === 'ArrowRight' && <ArrowRight />}
            {props.name === 'ArrowUp' && <ArrowUp />}
            {props.name === 'ArrowDown' && <ArrowDown />}
            {props.name === 'Pie' && <Pie />}
            {props.name === 'QuickFilter' && <QuickFilter />}
            {props.name === 'Filter' && <Filter />}
            {props.name === 'ViewHorizontal' && <ViewHorizontal />}
            {props.name === 'ViewVertical' && <ViewVertical />}
            {props.name === 'Import' && <Import />}
            {props.name === 'ImportXls' && <ImportXls />}
            {props.name === 'ExportXls' && <ExportXls />}
            {props.name === 'ImportPdf' && <ImportPdf />}
            {props.name === 'ExportPdf' && <ExportPdf />}
            {props.name === 'ImportCsv' && <ImportCsv />}
            {props.name === 'ExportCsv' && <ExportCsv />}
            {props.name === 'Events' && <Events />}
            {props.name === 'Grid' && <Grid />}
            {props.name === 'LetIn' && <LetIn />}
            {props.name === 'Stop' && <Stop />}
            {props.name === 'Control' && <Control />}
            {props.name === 'LetInMany' && <LetInMany />}
            {props.name === 'LetInOne' && <LetInOne />}
            {props.name === 'LetOutOne' && <LetOutOne />}
            {props.name === 'LetOutMany' && <LetOutMany />}
            {props.name === 'Warning' && <Warning />}
            {props.name === 'Bell' && <Bell />}
            {props.name === 'SecurityCall' && <SecurityCall />}
            {props.name === 'BlockUnLock' && <BlockUnLock />}
            {props.name === 'BlockLock' && <BlockLock />}
            {props.name === 'prev' && <PrevButton />}
            {props.name === 'next' && <NextButton />}
            {props.name === 'Gear' && <Gear />}
            {props.name === 'Layers' && <Layers />}
            {props.name === 'ScanFace' && <ScanFace />}
            {props.name === 'Lock' && <Lock />}
            {props.name === 'Pin' && <Pin />}
            {props.name === 'Sun' && <Sun />}
            {props.name === 'Moon' && <Moon />}
            {props.name === 'Loader' && <Loader />}
            {props.name === 'Identifiers' && <Identifiers />}
            {props.name === 'AccessPoint' && <Identifiers />}
            {props.name === 'Star' && <Star />}
            {props.name === 'Organization' && <Organization />}
            {props.name === 'Departments' && <Departments />}

            {props.label && (
                <span className="buttons__label">
                    <div className="p--md--normal">{props.label}</div>
                </span>
            )}
        </button>
    );
};

export const Buttons = memo(ButtonsInner);
