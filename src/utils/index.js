const statusBadge = (status) => {
  const classes = ['badge'];
  switch (status) {
    default:
    case 'Alive':
      classes.push('bg-success');
      break;
    case 'Dead':
      classes.push('bg-danger');
      break;
    case 'unknown':
      classes.push('bg-secondary');
      break;
  }
  return classes.join(' ');
}

export {
  statusBadge
}