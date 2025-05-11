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
  
  function determineCombatResult(totals) {
    if (totals.attackerTotal > totals.defenderTotal) return 'defender';
    if (totals.attackerTotal < totals.defenderTotal) return 'attacker';
    return 'both';
  }
  
  function applyCombatDamage(attacker, defender, loser, totals) {
    let attackerHp = attacker.hp ?? 1;
    let defenderHp = defender.hp ?? 1;
  
    const damage = Math.abs(totals.attackerTotal - totals.defenderTotal);
  
    if (loser === 'attacker') {
      attackerHp -= damage;
    } else if (loser === 'defender') {
      defenderHp -= damage;
    } else {
      attackerHp -= damage;
      defenderHp -= damage;
    }
  
    // 🔍 Log full combat breakdown
    console.log(`🎲 Attacker: ATK ${attacker.atk ?? 0} + Roll ${totals.attackerRoll} = ${totals.attackerTotal}`);
    console.log(`🛡️ Defender: DEF ${defender.def ?? 0} + Roll ${totals.defenderRoll} = ${totals.defenderTotal}`);
    console.log(`💥 Damage dealt to ${loser}: ${damage}`);
    console.log(`❤️ Attacker HP: ${attackerHp} | Defender HP: ${defenderHp}`);
  
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
    const loser = determineCombatResult(totals);
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
  