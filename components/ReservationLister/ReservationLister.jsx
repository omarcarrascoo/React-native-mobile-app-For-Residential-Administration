import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import ReservasCard from '../common/cards/ReservasCard/ReservasCard';
import { getMyReservations } from '../../redux/amenidadesRedux';
import CondoText from '../common/titles/CondoText';

function ReservationLister() {
  const [amenidades, setAmenidades] = useState([]);

  const fetchAmenidades = async () => {
    try {
      const amennidadesInfo = await getMyReservations(4386661000004923011);
      setAmenidades(Array.isArray(amennidadesInfo) ? amennidadesInfo : []);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      setPayment([]);
    }
  };

  useEffect(() => {
    fetchAmenidades();
  }, []);

  console.log(amenidades);

  return (
    <ScrollView style={{ maxHeight: 448 }}>
      {Array.isArray(amenidades) && amenidades.length > 0 ? (
        amenidades.map((item, index) => (
          <ReservasCard key={index} {...item} />
        ))
      ) : (
        <CondoText text={"No hay reservaciones disponibles."}/>
      )}
    </ScrollView>
  );
}

export default ReservationLister
