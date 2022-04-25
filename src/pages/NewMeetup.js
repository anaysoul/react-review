import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {}

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetip={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
