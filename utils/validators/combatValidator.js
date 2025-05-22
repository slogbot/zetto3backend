function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function calculateTotals(attacker, defender) {
    const attackerRoll = rollDie();
    const defenderRoll = rollDie();
  
    const attackerTotal = (attacker.atk ?? 0) + attackerRoll;
    const defenderTotal = (defender.def ?? 0) + defenderRoll;
  
    return {
      attackerRoll,
      defenderRoll,
      attackerTotal,
      defenderTotal
    };
  }
  
function determineCombatResult(totals, attacker, defender) {
  const defenderIsStructure = defender.type === 'structure';

  if (totals.attackerTotal > totals.defenderTotal) return 'defender';
  if (totals.attackerTotal < totals.defenderTotal) {
    return defenderIsStructure ? 'none' : 'attacker'; // ⛔️ Don't let structure kill attacker
  }
  return 'both';
}

  function applyCombatDamage(attacker, defender, loser, totals) {
  let attackerHp = attacker.hp ?? 1;
  let defenderHp = defender.hp ?? 1;

  const damage = Math.abs(totals.attackerTotal - totals.defenderTotal);

 if (loser === 'attacker') {
  attackerHp -= damage;
  console.log(`💥 Damage dealt to attacker: ${damage}`);
} else if (loser === 'defender') {
  defenderHp -= damage;
  console.log(`💥 Damage dealt to defender: ${damage}`);
} else if (loser === 'both') {
  attackerHp -= damage;
  defenderHp -= damage;
  console.log(`💥 Damage dealt to both: ${damage}`);
} else {
  console.log(`💤 No damage dealt (structure won)`);
}

  return {
    attackerHp,
    defenderHp,
    attackerRoll: totals.attackerRoll,
    defenderRoll: totals.defenderRoll,
    loser
  };
}

  
  function resolveCombat(attacker, defender) {
    if (!attacker || !defender) {
      return { valid: false, reason: 'Missing attacker or defender' };
    }
  
    const totals = calculateTotals(attacker, defender);
const loser = determineCombatResult(totals, attacker, defender);
    const outcome = applyCombatDamage(attacker, defender, loser, totals);
  
    const winner =
      loser === 'attacker' ? 'defender' :
      loser === 'defender' ? 'attacker' :
      'none';
  
    return {
      valid: true,
      ...outcome,
      winner // ✅ add winner field here
    };
  }
  
  
  module.exports = {
    resolveCombat
  };
  