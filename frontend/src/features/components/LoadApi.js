import React from 'react'
import { quocgiaData } from "../container/admin/Quocgia/quocgiaSlice";
import { loaitourData } from "../container/admin/Loaitour/loaitourSlice";
import { diadiemData } from "../container/admin/DiaDiem/diadiemSlice";
import { userData } from "../container/admin/taikhoan/taikhoanSlice";
import { anhData } from "../container/admin/Anh/anhSlice";
import { dichvuData } from "../container/admin/Dichvu/dichvuSlice";
import { roleData } from "../container/admin/Role/roleSlice";
import { ngaydiData } from "../container/admin/Ngaydi/ngaydiSlice";
import { tourData } from "../container/admin/Tour/tourSlice";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

export default function LoadApi() {
    const dispatch = useDispatch();
    const actionquocgia = async () => { await dispatch(quocgiaData()) }
    const actionloaitour = async () => { await dispatch(loaitourData()) }
    const actionuser = async () => { await dispatch(userData()) }
    const actiondiadiem = async () => { await dispatch(diadiemData()) }
    const actionanh = async () => { await dispatch(anhData()) }
    const actiondichvu = async () => { await dispatch(dichvuData()) }
    const actionrole = async () => { await dispatch(roleData()) }
    const actionngaydi = async () => { await dispatch(ngaydiData()) }
    const actiontour = async () => { await dispatch(tourData()) }
    useEffect(() => {
        actionquocgia();
        actionloaitour();
        actionuser();
        actiondiadiem();
        actionanh();
        actiondichvu();
        actionrole();
        actionngaydi();
        actiontour();
    }, [])

}
